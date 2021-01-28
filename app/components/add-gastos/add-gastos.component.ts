import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  LoadingController,
  ToastController,
  ViewController
} from "ionic-angular";
import { CategoriaDef, GastosDetalle } from "../../../interface/gastos";
import { GastosService } from "../../service/gastos.service";
import { LoadingUtil } from "../../utils/loadingUtil";

@Component({
  selector: "app-add-gastos",
  templateUrl: "./add-gastos.component.html",
  styleUrls: ["./add-gastos.component.css"]
})
export class AddGastosComponent extends LoadingUtil implements OnInit {
  item: GastosDetalle = {};
  categorias: CategoriaDef[];
  date = new Date(); // Or the date you'd like converted.
  today: string = new Date(
    this.date.getTime() - this.date.getTimezoneOffset() * 60000
  ).toISOString();

  private fields: FormGroup;

  constructor(
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private service: GastosService,
    private toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) {
    super(loadingCtrl);
    this.fields = this.formBuilder.group({
      categoria: ["", Validators.required],
      nombre: ["", Validators.required],
      fecha: ["", Validators.required],
      monto: ["", Validators.required],
      comentario: [""]
    });
  }
  logForm() {
    console.log(this.fields.value);
  }
  ngOnInit() {
    this.initCategorias();
    this.item.Fecha = this.today;
  }

  initCategorias() {
    this.service.getCategoriaDef().subscribe((resp: CategoriaDef[]) => {
      this.categorias = resp || [];
      this.getDismiss();
    });
    this.getPresent();
  }

  onChange(_categoria: any) {
    if (_categoria) {
      let categoria: CategoriaDef;
      categoria = this.categorias.find(data => data.Categoria === _categoria);
      this.item.Nombre = categoria.Persona;
    }
  }
  onSave() {
    let fecha = new Date(this.item.Fecha);
    this.item.Fecha = fecha.toLocaleString();
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
