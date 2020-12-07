import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  LoadingController,
  ToastController,
  ViewController
} from "ionic-angular";
import { Casa, Recibo, ReciboDetalle } from "../../../interface/recibos";
import { RecibosService } from "../../service/recibos.service";
import { LoadingUtil } from "../../utils/loadingUtil";

@Component({
  selector: "app-add-recibos",
  templateUrl: "./add-recibos.component.html",
  styleUrls: ["./add-recibos.component.css"]
})
export class AddRecibosComponent extends LoadingUtil implements OnInit {
  item: Recibo = {};
  itemDetail: ReciboDetalle = {};
  casas: Casa[];
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
      cantidad: ["", Validators.required],
      concepto: [""]
    });
  }

  ngOnInit() {
    this.service.getFullData().subscribe((resp: Casa[]) => {
      this.casas = resp || [];
      this.getDismiss();
    });
    this.getPresent();
  }

  onSave() {
    this.service.save(this.item).subscribe(
      resp => {
        this.meesageToast("Se guardo exitosamente");
        this.getDismiss();
        this.dismiss();
      },
      err => {
        this.meesageToast("No se pudo guardar el dato");
        console.log("Error: ", err);
        this.getDismiss();
      }
    );
    this.getPresent();
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
