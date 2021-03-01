import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {
  LoadingController,
  ToastController,
  ViewController
} from "ionic-angular";
import {
  Casa,
  Concepto,
  Recibo,
  ReciboDetalle
} from "../../../interface/recibos";
import { RecibosService } from "../../service/recibos.service";
import { LoadingUtil } from "../../utils/loadingUtil";

@Component({
  selector: "app-add-recibos",
  templateUrl: "./add-recibos.component.html",
  styleUrls: ["./add-recibos.component.css"]
})
export class AddRecibosComponent extends LoadingUtil implements OnInit {
  item: Recibo = {};
  itemDetail: ReciboDetalle[] = [];
  casas: Casa[];
  casa: Casa;
  conceptos: Concepto[] = [];
  data: boolean;
  sendEmail: boolean = false;

  date = new Date(); // Or the date you'd like converted.
  today: string = new Date(
    this.date.getTime() - this.date.getTimezoneOffset() * 60000
  ).toISOString();

  private fields: FormGroup;

  constructor(
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private service: RecibosService,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) {
    super(loadingCtrl);
    this.fields = this.formBuilder.group({
      folio: ["", Validators.required],
      casa: ["", Validators.required],
      nombre: ["", Validators.required],
      fecha: ["", Validators.required],
      email: ["", Validators.required],
      sendEmail: "",
      cantidad: ["", Validators.required],
      conceptos: this.formBuilder.array([this.frmConceptos()])
    });
  }

  frmConceptos(): FormGroup {
    return this.formBuilder.group({
      concepto: ["", Validators.required],
      mes: ["", Validators.required],
      monto: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.getMaxFolio();
    this.item.FECHA = this.today;
    //this.itemDetail[0].MES = this.today;
    this.inittial();
  }

  getMaxFolio() {
    this.service.getRecibos().subscribe((resp: Recibo[]) => {
      this.item.FOLIO = Math.max(...resp.map(row => row.FOLIO)) + 1;
    });
  }

  inittial() {
    this.service.getFullData().subscribe((resp: Casa[]) => {
      this.casas = resp || [];
      this.getDismiss();
    });
    this.service.getConceptos().subscribe((resp: any[]) => {
      this.conceptos = resp || [];
      // console.log(this.conceptos);
      // this.getDismiss();
    });
    this.getPresent();
  }

  onChangeCasa(_casa: any) {
    if (_casa) {
      this.casa = this.casas.find(data => {
        if (data.CASA === _casa.CASA && data.NOMBRE === _casa.NOMBRE)
          return data;
      });
      this.item.NOMBRE = this.casa.NOMBRE;
      this.item.CORREO = this.casa.EMAIL;
      this.sendEmail = true;
    }
  }

  onSave(_recibo: any) {
    this.fillEvent(_recibo);
    this.service.save(this.item, this.itemDetail).subscribe(
      resp => {
        // console.log("resp save item", resp);
        if (this.sendEmail) {
          let fecha = new Date(_recibo.fecha);
          let date = new Date(
            fecha.getTime() + this.date.getTimezoneOffset() * 60000
          ); //add 1 day
          console.log(_recibo.fecha);
          _recibo.fecha = date.toLocaleDateString();
          console.log(_recibo.fecha);
          this.service.sendEmail(_recibo, _recibo.conceptos).subscribe(
            resp => {
              console.log("resp save item", resp);
              this.meesageToast("correo enviado");
            },
            err => {
              console.log("Error email: ", err);
            }
          );
        }
        this.meesageToast("Se guardo exitosamente");
        this.getDismiss();
        this.dismiss();
      },
      err => {
        //console.log("Error Detail: ", err);
        this.meesageToast("No se pudo guardar el dato");
        this.getDismiss();
      }
    );
    this.getPresent();
    _recibo.sendEmail = true;
  }

  fillEvent(_recibo: any) {
    // console.log("event", _recibo);
    this.item.FOLIO = _recibo.folio;
    let fecha = new Date(_recibo.fecha);
    this.item.FECHA = _recibo.fecha;
    this.item.CASA = _recibo.casa.CASA;
    this.item.NOMBRE = _recibo.nombre;
    this.item.CORREO = _recibo.email;
    this.item.CANTIDAD = _recibo.cantidad;
    // console.log("this.item", this.item);
    var conceptos = _recibo.conceptos;
    this.itemDetail = [];
    if (conceptos) {
      //console.log("conceptos", conceptos);
      conceptos.forEach(data => {
        var detail: ReciboDetalle = {};
        detail.FOLIO = _recibo.folio;
        detail.CASA = _recibo.casa;
        detail.NOMBRE = _recibo.nombre;
        detail.CONCEPTO = data.concepto;
        detail.MES = data.mes;
        detail.MONTO = data.monto;
        //console.log("detail", detail);
        this.itemDetail.push(detail);
      });
    }
    // console.log("this.itemDetail", this.itemDetail);
  }

  removeInputField(i: number): void {
    const control = <FormArray>this.fields.controls.conceptos;
    control.removeAt(i);
  }

  addNewInputField(): void {
    const control = <FormArray>this.fields.controls.conceptos;
    control.push(this.frmConceptos());
  }

  meesageToast(_message: string) {
    let toast = this.toastCtrl.create({
      message: _message,
      duration: 3000,
      position: "top"
    });

    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    });

    toast.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
