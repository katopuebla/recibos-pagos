import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ModalController,
  LoadingController,
  ActionSheetController,
} from '@ionic/angular';
import { CategoriaDef, Concepto, Gastos, GastosDetalle } from '../../interface/gastos';
import { GastosService } from '../../service/gastos.service';
import { LoadingUtil } from '../../utils/loadingUtil';
import { ToastUtil } from 'src/app/utils/toastUtil';

@Component({
  selector: 'app-add-gastos',
  templateUrl: 'add-gastos.component.html',
  styleUrls: ['add-gastos.component.css'],
  standalone: false,
})
export class AddGastosComponent extends LoadingUtil implements OnInit {
  gasto: Gastos = {};
  gastoDetalle: GastosDetalle = {};
  gastoDetalles: GastosDetalle [] = [];
  conceptos: Concepto[] = [];
  categorias: CategoriaDef[] = [];
  date = new Date(); // Or the date you'd like converted.
  today = new Date(
    this.date.getTime() - this.date.getTimezoneOffset() * 60000
  );

  public fields: FormGroup;

  constructor(
    public modalCtrl: ModalController,
    private actionSheet: ActionSheetController,
    private formBuilder: FormBuilder,
    private service: GastosService,
    loadingCtrl: LoadingController,
    private toastCtrl: ToastUtil
  ) {
    super(loadingCtrl);
    this.fields = this.formBuilder.group({
      categoria: ['', Validators.required],
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      monto: ['', Validators.required],
      comentario: [''],
      conceptos: this.formBuilder.array([this.frmConceptos()])
    });
  }

  frmConceptos(): FormGroup {
    return this.formBuilder.group({
      // concepto: ['', Validators.required],
      mes: ['', Validators.required],
      monto: ['', Validators.required]
    });
  }

  get conceptoForm() {
    return this.fields.get('conceptos') as FormArray;
  }

  logForm() {
    console.log(this.fields.value);
  }
  ngOnInit() {
    this.service.getSpreadSheetId().then(() => this.initCategorias());
    const formattedDate = this.today.toJSON().split('T')[0];
    this.fields.patchValue({ fecha: formattedDate });
    this.showLoading();
  }

  initCategorias() {
    this.service.getCategoriaDef().subscribe((resp: CategoriaDef[]) => {
      this.categorias = resp || [];
      this.loadingDismiss();
    });
  }

  onChange(event: CustomEvent) {
    const _categoria: CategoriaDef = event.detail.value;
    if (_categoria) {
      let categoria: CategoriaDef;
      categoria = this.categorias && this.categorias.find((data) => data.Nombre === _categoria.Nombre) || {} as CategoriaDef;
      this.fields.patchValue({ nombre: categoria.PersonaServicio });
    }
  }

    onChangeMonto(event: CustomEvent, i: number) {
      const _monto: number = event.detail.value;
      if (_monto) {
        const control = <FormArray>this.fields.controls['conceptos'];
        const newMonto = _monto - control.at(i).value.monto;
        const formattedDate = this.today.toJSON().split('T')[0];
        control.at(i).patchValue({
          mes: formattedDate,
          monto: _monto
        });
      }
    }

  async onSave(_gasto: any) {
    const actionSheet = await this.actionSheet.create({
      header: '¿Desea guardar el gasto?',
      buttons: [
        {
          text: 'Guardar',
          icon: 'save',
          handler: () => {
            this.save(_gasto);
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
        },
      ],
  });
    await actionSheet.present();
}

  save(_gasto: any) {
    let fecha = new Date(this.gasto.Fecha || this.today);
    this.gasto.Fecha = fecha.toLocaleString('es-MX', {
      timeZone: 'America/Mexico_City'
    });
    this.fillEvent(_gasto);
    this.service.save(this.gasto, this.gastoDetalles).subscribe({
      next: (resp) => {
        this.meesageToast('Se guardo exitosamente');
        this.loadingDismiss();
        this.confirm();
      },
      error: (err) => {
        this.meesageToast('No se pudo guardar el dato');
        console.log('Error: ', err);
        this.loadingDismiss();
      }
    });
    this.showLoading();
  }

    fillEvent(_gasto: any) {
      // console.log("fillEvent", _gasto);
      this.gasto.Categoria = _gasto.categoria.Nombre;
      this.gasto.Fecha = _gasto.fecha;
      this.gasto.Nombre = _gasto.nombre;
      this.gasto.Monto = _gasto.monto;
      this.gasto.Commentario = _gasto.comentario;
      // console.log("this.gastos", this.gastos);
      var conceptos = _gasto.conceptos;
          this.gastoDetalles = [];
          if (conceptos) {
            conceptos.forEach((data: Concepto) => {
            var detail: GastosDetalle = {};
            detail.Categoria = _gasto.categoria.Nombre;
            detail.Fecha = data.mes;
            detail.Nombre = _gasto.nombre;
            detail.Monto = data.monto;
            detail.Commentario = _gasto.comentario;
              //console.log("detail", detail);
              this.gastoDetalles.push(detail);
            });
          }
    }

    removeInputField(i: number): void {
      const control = <FormArray>this.fields.controls['conceptos'];
      control.removeAt(i);
    }

    addNewInputField(): void {
      const control = <FormArray>this.fields.controls['conceptos'];
      let sumMonto: number = 0;
      control.controls.forEach((data: any) => {
        sumMonto += data.value.monto;
      });
      control.push(this.frmConceptos());
      this.updateMountConcepto(sumMonto);
    }

    updateMountConcepto(_monto: number = 0) {
      const monto = this.fields.value.monto;
      const newMonto = monto - _monto;
      const control = <FormArray>this.fields.controls['conceptos'];
      const formattedDate = this.today.toJSON().split('T')[0];
      control.at(control.length -1 ).patchValue({
        mes: formattedDate,
        monto: newMonto
      });
    }


  meesageToast(_message: string) {
    this.toastCtrl.presentToast(_message, 'top');
  }

  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  confirm() {
    this.modalCtrl.dismiss(null, 'confirm');
  }
}
