"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_add-recibos_add-recibos_component_ts"],{

/***/ 4885:
/*!*****************************************************************!*\
  !*** ./src/app/components/add-recibos/add-recibos.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddRecibosComponent: () => (/* binding */ AddRecibosComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _service_recibos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/recibos.service */ 7492);
/* harmony import */ var _utils_loadingUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/loadingUtil */ 7568);
/* harmony import */ var _utils_toastUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/toastUtil */ 3511);
/* harmony import */ var src_app_utils_alertUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/alertUtil */ 7578);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);

var _AddRecibosComponent;









function AddRecibosComponent_ion_select_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const casa_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", casa_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", casa_r1.ID, "--", casa_r1.NOMBRE, " ");
  }
}
function AddRecibosComponent_section_27_ion_select_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", row_r5.NOMBRE);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r5.NOMBRE, " ");
  }
}
function AddRecibosComponent_section_27_ion_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRecibosComponent_section_27_ion_button_13_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.removeInputField(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddRecibosComponent_section_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 20)(1, "ion-item-group")(2, "ion-item-divider", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-item")(5, "ion-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function AddRecibosComponent_section_27_Template_ion_select_ionChange_5_listener($event) {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.onChangeConcepto($event, i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddRecibosComponent_section_27_ion_select_option_6_Template, 2, 2, "ion-select-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-item")(8, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Mes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-datetime", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ion-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AddRecibosComponent_section_27_ion_button_13_Template, 3, 0, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Conceptos #", i_r3 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.conceptos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("preferWheel", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.conceptoForm.length > 1);
  }
}
// export class AddRecibosComponent extends LoadingUtil implements OnInit {
class AddRecibosComponent {
  constructor(modalCtrl, actionSheetCtrl, formBuilder, service,
  // loadingCtrl: LoadingController,
  loadingUtil, toastUtil, alertUtil) {
    this.modalCtrl = modalCtrl;
    this.actionSheetCtrl = actionSheetCtrl;
    this.formBuilder = formBuilder;
    this.service = service;
    this.loadingUtil = loadingUtil;
    this.toastUtil = toastUtil;
    this.alertUtil = alertUtil;
    this.item = {
      FOLIO: 0,
      CASA: '',
      NOMBRE: '',
      CANTIDAD: '',
      CONCEPTO: '',
      FECHA: '',
      CORREO: '',
      INPUT_TIMESTAMP: ''
    };
    this.itemDetail = [];
    this.casas = [];
    this.conceptos = [];
    this.data = false;
    this.sendEmail = false;
    this.date = new Date(); // Or the date you'd like converted.
    this.today = new Date(this.date.getTime() - this.date.getTimezoneOffset() * 60000);
    // super(loadingCtrl);
    this.fields = this.formBuilder.group({
      folio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      casa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      fecha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      sendEmail: '',
      cantidad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      conceptos: this.formBuilder.array([this.frmConceptos()])
    });
  }
  frmConceptos() {
    return this.formBuilder.group({
      concepto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3)]],
      mes: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      monto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });
  }
  get conceptoForm() {
    return this.fields.get('conceptos');
  }
  ngOnInit() {
    this.service.getSpreadSheetId().then(() => {
      // const FOLIO = this.getMaxFolio();
      const formattedDate = this.today.toJSON().split('T')[0];
      this.fields.patchValue({
        fecha: formattedDate
      });
      this.inittial();
      // this.dismiss();
    });
    this.loadingUtil.showing();
  }
  getMaxFolio() {
    this.service.getFullDataDetail().subscribe({
      next: resp => {
        const FOLIO = Math.max(...resp.map(row => row.FOLIO)) + 1;
        this.fields.patchValue({
          folio: FOLIO
        });
        this.loadingUtil.dismiss();
      },
      error: err => {
        const FOLIO = 1;
        this.fields.patchValue({
          folio: FOLIO
        });
        this.loadingUtil.dismiss();
        this.alertUtil.showError('No se pudo obtener el folio: ' + err.message);
      }
    });
  }
  inittial() {
    var _this = this;
    this.service.getFullData().subscribe({
      next: resp => {
        this.casas = resp || [];
        // this.dismiss();
        this.service.getConceptos().subscribe(resp => {
          this.conceptos = resp || [];
          // console.log(this.conceptos);
          this.getMaxFolio();
        });
      },
      error: function () {
        var _ref = (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          console.error('Error al cargar datos:', err);
          _this.loadingUtil.dismiss();
          _this.alertUtil.showError('No se pudieron cargar los datos: ' + err.message);
        });
        return function error(_x) {
          return _ref.apply(this, arguments);
        };
      }()
    });
  }
  onChangeCasa(event) {
    const _casa = event.detail.value;
    if (_casa.ID) {
      this.casa = this.casas.find(data => {
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
  onChangeConcepto(event, i) {
    const _concepto = event.detail.value;
    if (_concepto) {
      const control = this.fields.controls['conceptos'];
      let _monto = this.calMontoConcepto();
      control.at(i).patchValue({
        mes: this.getFirstDayOfMonth(),
        monto: _monto
      });
    }
  }
  calMontoConcepto() {
    const control = this.fields.controls['conceptos'];
    let sumMonto = 0;
    control.controls.forEach(data => {
      sumMonto += data.value.monto;
    });
    return this.fields.value.cantidad - sumMonto;
  }
  getFirstDayOfMonth() {
    const firstDayOfMonth = new Date(this.today.getFullYear(), this.today.getMonth(), 1).toJSON().split('T')[0];
    return firstDayOfMonth;
  }
  onSave(_recibo) {
    var _this2 = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this2.actionSheetCtrl.create({
        header: '¿Desea guardar el recibo?',
        buttons: [{
          text: 'Aceptar',
          role: 'confirm',
          icon: 'checkmark',
          handler: () => {
            _this2.save(_recibo);
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close'
        }]
      });
      yield actionSheet.present();
    })();
  }
  save(_recibo) {
    let _casa = _recibo.casa;
    _recibo.casa = _casa.ID;
    this.fillEvent(_recibo);
    this.service.save(this.item, this.itemDetail).subscribe({
      next: resp => {
        // console.log("resp save item", resp);
        if (this.sendEmail) {
          let fecha = new Date(_recibo.fecha);
          let date = new Date(fecha.getTime() + this.date.getTimezoneOffset() * 60000); //add 1 day
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
  fillEvent(_recibo) {
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
      conceptos.forEach(data => {
        var detail = {};
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
  removeInputField(i) {
    const control = this.fields.controls['conceptos'];
    control.removeAt(i);
  }
  addNewInputField() {
    const control = this.fields.controls['conceptos'];
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
  meesageToast(_message) {
    this.toastUtil.presentToast(_message, "top");
  }
  confirm(reciboDetalles) {
    this.modalCtrl.dismiss(reciboDetalles, 'confirm');
  }
  close() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
_AddRecibosComponent = AddRecibosComponent;
_AddRecibosComponent.ɵfac = function AddRecibosComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddRecibosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_recibos_service__WEBPACK_IMPORTED_MODULE_1__.RecibosService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_utils_loadingUtil__WEBPACK_IMPORTED_MODULE_2__.LoadingUtil), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_utils_toastUtil__WEBPACK_IMPORTED_MODULE_3__.ToastUtil), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_utils_alertUtil__WEBPACK_IMPORTED_MODULE_4__.AlertUtil));
};
_AddRecibosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _AddRecibosComponent,
  selectors: [["app-add-recibos"]],
  standalone: false,
  decls: 33,
  vars: 4,
  consts: [["slot", "start"], [3, "click"], ["name", "close"], [1, "ion-padding"], [3, "ngSubmit", "formGroup"], ["label", "Folio", "labelPlacement", "floating", "id", "folio", "type", "number", "formControlName", "folio"], ["label", "Fecha", "labelPlacement", "floating", "id", "fecha", "type", "date", "formControlName", "fecha"], ["label", "Casa", "labelPlacement", "floating", "id", "casa", "interface", "popover", "formControlName", "casa", 3, "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["label", "Nombre", "labelPlacement", "floating", "id", "nombre", "type", "text", "formControlName", "nombre"], ["label", "Email", "labelPlacement", "floating", "id", "email", "type", "email", "formControlName", "email"], ["id", "sendEmail", "item-right", "", "secondary", "", "formControlName", "sendEmail", "color", "green"], ["label", "Cantidad", "labelPlacement", "floating", "id", "cantidad", "type", "number", "formControlName", "cantidad"], ["slot", "start", "name", "cash", "aria-hidden", "true"], ["formArrayName", "conceptos", "margin-bottom", ""], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["size", "small", "fill", "clear", "color", "primary", 3, "click"], ["slot", "start", "name", "add"], ["type", "submit", "expand", "block", 3, "disabled"], [3, "value"], [3, "formGroupName"], ["color", "light"], ["label", "Concepto:", "labelPlacement", "floating", "interface", "popover", "id", "concepto", "formControlName", "concepto", 3, "ionChange"], ["floating", ""], ["id", "mes", "displayFormat", "MMM. YYYY", "formControlName", "mes", "monthShortNames", "Ene, Feb, Mar, Apr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic", "presentation", "month-year", 3, "preferWheel"], ["label", "Monto:", "labelPlacement", "floating", "id", "monto", "type", "number", "maxlength", "50", "formControlName", "monto"], ["size", "small", "fill", "clear", "color", "danger", 3, "click", 4, "ngIf"], ["size", "small", "fill", "clear", "color", "danger", 3, "click"]],
  template: function AddRecibosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Agregar Recibos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-buttons", 0)(5, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRecibosComponent_Template_ion_button_click_5_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content", 3)(8, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AddRecibosComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSave(ctx.fields.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ion-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-item")(14, "ion-select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function AddRecibosComponent_Template_ion_select_ionChange_14_listener($event) {
        return ctx.onChangeCasa($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AddRecibosComponent_ion_select_option_15_Template, 2, 3, "ion-select-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "ion-select-option")(17, "ion-select-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "ion-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "ion-input", 10)(22, "ion-checkbox", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "ion-item")(24, "ion-input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "ion-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, AddRecibosComponent_section_27_Template, 14, 5, "section", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "ion-button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRecibosComponent_Template_ion_button_click_28_listener() {
        return ctx.addNewInputField();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "ion-icon", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " nuevo concepto ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "ion-button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Agregar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.fields);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.casas);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.conceptoForm.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.fields.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName],
  styles: ["ion-select[_ngcontent-%COMP%] {\n  min-width: 100%;\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZGQtcmVjaWJvcy9hZGQtcmVjaWJvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VsZWN0IHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7578:
/*!************************************!*\
  !*** ./src/app/utils/alertUtil.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertUtil: () => (/* binding */ AlertUtil)
/* harmony export */ });
/* harmony import */ var _home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);

var _AlertUtil;


class AlertUtil {
  constructor(alertCtrl) {
    this.alertCtrl = alertCtrl;
  }
  showSucess(message) {
    var _this = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertCtrl.create({
        header: 'Exito',
        message: message,
        buttons: ['OK']
      });
      yield alert.present();
      console.log('Success:', message);
    })();
  }
  showError(message) {
    var _this2 = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertCtrl.create({
        header: 'Error',
        message: message,
        buttons: ['OK']
      });
      yield alert.present();
      console.error('Error:', message);
    })();
  }
}
_AlertUtil = AlertUtil;
_AlertUtil.ɵfac = function AlertUtil_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AlertUtil)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController));
};
_AlertUtil.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _AlertUtil,
  factory: _AlertUtil.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_add-recibos_add-recibos_component_ts.js.map