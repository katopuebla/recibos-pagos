import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  ActionSheetController,
  LoadingController,
  ModalController
} from '@ionic/angular';
import {
  Casa,
  Concepto,
  ConceptoDef,
  Recibo,
  ReciboDetalle,
  ReciboMaxFolio
} from '../../interface/recibos';
import { RecibosService } from '../../service/recibos.service';
import { LoadingUtil } from '../../utils/loadingUtil';
import { ToastUtil } from '../../utils/toastUtil';
import { AlertUtil } from 'src/app/utils/alertUtil';

@Component({
  selector: 'app-add-recibos',
  templateUrl: './add-recibos.component.html',
  styleUrls: ['./add-recibos.component.css'],
  standalone: false,
})
// export class AddRecibosComponent extends LoadingUtil implements OnInit {
export class AddRecibosComponent implements OnInit {
  item: Recibo = {
    FOLIO: 0,
    CASA: '',
    NOMBRE: '',
    CANTIDAD: '',
    CONCEPTO: '',
    FECHA: '',
    CORREO: '',
    INPUT_TIMESTAMP: ''
  };
  itemDetail: ReciboDetalle[] = [];
  casas: Casa[] = [];
  casa: Casa | any;
  conceptos: ConceptoDef[] = [];
  data: boolean = false;
  sendEmail: boolean = false;

  date = new Date(); // Or the date you'd like converted.
  today = new Date(
    this.date.getTime() - this.date.getTimezoneOffset() * 60000
  );
  public fields: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private formBuilder: FormBuilder,
    private service: RecibosService,
    // loadingCtrl: LoadingController,
    private loadingUtil: LoadingUtil,
    private toastUtil: ToastUtil,
    private alertUtil: AlertUtil
  ) {
    // super(loadingCtrl);
    this.fields = this.formBuilder.group({
      folio: ['', Validators.required],
      casa: ['', Validators.required],
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      email: ['', Validators.required],
      sendEmail: '',
      cantidad: ['', Validators.required],
      conceptos: this.formBuilder.array([this.frmConceptos()])
    });
  }

  frmConceptos(): FormGroup {
    return this.formBuilder.group({
      concepto: ['', [Validators.required, Validators.minLength(3)]],
      mes: ['', [Validators.required]],
      monto: ['', [Validators.required, Validators.min(0), Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });
  }

  get conceptoForm() {
    return this.fields.get('conceptos') as FormArray;
  }

  ngOnInit() {
    this.service.getSpreadSheetId().then(() => {
      // const FOLIO = this.getMaxFolio();
      const formattedDate = this.today.toJSON().split('T')[0];
      this.fields.patchValue({ fecha: formattedDate });
      this.inittial();
      // this.dismiss();
    });
    this.loadingUtil.showing();
  }

  getMaxFolio() {
    this.service.getFullDataDetail().subscribe(
      {
         next: (resp: ReciboDetalle[] | any) => {
          const FOLIO = Math.max(...resp.map((row: { FOLIO: any; }) => row.FOLIO)) + 1;
          this.fields.patchValue({ folio: FOLIO });
          this.loadingUtil.dismiss();
        }, error: err => {
          const FOLIO = 1;
          this.fields.patchValue({ folio: FOLIO });
          this.loadingUtil.dismiss();
          this.alertUtil.showError('No se pudo obtener el folio: ' + err.message);
        }
      });
  }

  inittial() {
    this.service.getFullData().subscribe({
      next: (resp: Casa[] | any) => {
      this.casas = resp || [];
      // this.dismiss();
      this.service.getConceptos().subscribe((resp: ConceptoDef[] | any) => {
        this.conceptos = resp || [];
        // console.log(this.conceptos);
        this.getMaxFolio();
        });
      },
      error: async (err) => {
        console.error('Error al cargar datos:', err);
        this.loadingUtil.dismiss();
        this.alertUtil.showError('No se pudieron cargar los datos: ' + err.message);
      }
    });
  }

  onChangeCasa(event: CustomEvent) {
    const _casa: Casa = event.detail.value;
    if (_casa.ID) {
      this.casa = this.casas.find((data: Casa) => {
        if (data.ID === _casa.ID && data.NOMBRE === _casa.NOMBRE) {
          return data;
        }
        return null;
      });

      this.fields.patchValue({
        nombre: this.casa.NOMBRE,
        email: this.casa.EMAIL,
        sendEmail: true
      });
    }
  }

  onChangeConcepto(event: CustomEvent, i: number) {
    const _concepto: ConceptoDef = event.detail.value;
    if (_concepto) {
      const control = <FormArray>this.fields.controls['conceptos'];
      let _monto = this.calMontoConcepto();
      control.at(i).patchValue({
        mes: this.getFirstDayOfMonth(),
        monto: _monto
      });
    }
  }

  calMontoConcepto() {
    const control = <FormArray>this.fields.controls['conceptos'];
    let sumMonto: number = 0;
      control.controls.forEach((data: any) => {
        sumMonto += data.value.monto;
      });
      return this.fields.value.cantidad - sumMonto;
  }

  getFirstDayOfMonth() {
    const firstDayOfMonth = new Date(this.today.getFullYear(), this.today.getMonth(), 1).toJSON().split('T')[0];
    return firstDayOfMonth;
  }

  async onSave(_recibo: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '¿Desea guardar el recibo?',
      buttons: [
        {
          text: 'Aceptar',
          role: 'confirm',
          icon: 'checkmark',
          handler: () => {
            this.save(_recibo);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
        }
      ]
    });
    await actionSheet.present();
  }

  save(_recibo: any) {
    let _casa = _recibo.casa;
    _recibo.casa = _casa.ID;
    this.fillEvent(_recibo);
    this.service.save(this.item, this.itemDetail).subscribe( {
      next: resp => {
        // console.log("resp save item", resp);
        if (this.sendEmail) {
          let fecha = new Date(_recibo.fecha);
          let date = new Date(
            fecha.getTime() + this.date.getTimezoneOffset() * 60000
          ); //add 1 day
          // console.log(_recibo.fecha);
          _recibo.fecha = date.toLocaleDateString();
          // console.log(_recibo.fecha);
          this.service.sendEmail(_recibo, _recibo.conceptos).subscribe({
            next: resp => {
              // console.log('resp save item', resp);
              this.meesageToast('correo enviado');
            },
            error: err => {
              console.log('Error email: ', err);
            }
          });
        }
        this.meesageToast('Se guardo exitosamente');
        this.loadingUtil.dismiss();
        this.itemDetail = this.convertMonth(this.itemDetail);
        this.confirm(this.itemDetail);
      },
      error: err => {
        //console.log("Error Detail: ", err);
        this.meesageToast('No se pudo guardar el dato');
        this.loadingUtil.dismiss();
      }
  });
    this.loadingUtil.showing();
    _recibo.sendEmail = true;
  }

convertMonth(itemDetail: ReciboDetalle[]) {
    return itemDetail.map(item => {
      // 1. Toma el string y separa
      const [yyyy, mm, dd] = item.MES?.split('-') || [];
      // 3. Crea fecha ISO agregando hora
      const isoString = `${yyyy}-${mm}-${dd}T06:00:00.000Z`;
      // 4. Devuelve el nuevo objeto con MES modificado
      return { ...item, MES: isoString };
    });
  }

  fillEvent(_recibo: any) {
    // console.log("event", _recibo);
    this.item.FOLIO = _recibo.folio;
    let fecha = new Date(_recibo.fecha);
    this.item.FECHA = _recibo.fecha;
    this.item.CASA = _recibo.casa;
    this.item.NOMBRE = _recibo.nombre;
    this.item.CORREO = _recibo.email;
    this.item.CANTIDAD = _recibo.cantidad;
    // console.log("this.item", this.item);
    var conceptos = _recibo.conceptos;
    this.itemDetail = [];
    if (conceptos) {
      this.item.CONCEPTO = _recibo.conceptos[0].concepto;
      //console.log("conceptos", conceptos);
      conceptos.forEach((data: Concepto) => {
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
    const control = <FormArray>this.fields.controls['conceptos'];
    control.removeAt(i);
  }

  addNewInputField(): void {
    const control = <FormArray>this.fields.controls['conceptos'];
    control.push(this.frmConceptos());
  }

  /* async meesageToast(_message: string) {
    let toast = await this.toastCtrl.create({
      message: _message,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  } */

  meesageToast(_message: string) {
    this.toastUtil.presentToast(_message, "top");
  }

  confirm(reciboDetalles: any) {
      this.modalCtrl.dismiss(reciboDetalles, 'confirm');
  }

  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
