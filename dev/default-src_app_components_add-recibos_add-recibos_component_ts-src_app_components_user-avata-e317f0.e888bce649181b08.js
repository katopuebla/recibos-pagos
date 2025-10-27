"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_add-recibos_add-recibos_component_ts-src_app_components_user-avata-e317f0"],{

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









function AddRecibosComponent_ion_item_9_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", row_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r3.NOMBRE, " ");
  }
}
function AddRecibosComponent_ion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function AddRecibosComponent_ion_item_9_Template_ion_select_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onChangePrefijo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddRecibosComponent_ion_item_9_ion_select_option_2_Template, 2, 2, "ion-select-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.prefijos);
  }
}
function AddRecibosComponent_ion_select_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const casa_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", casa_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", casa_r4.ID, "--", casa_r4.NOMBRE, " ");
  }
}
function AddRecibosComponent_section_28_ion_select_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", row_r7.NOMBRE);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r7.NOMBRE, " ");
  }
}
function AddRecibosComponent_section_28_ion_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRecibosComponent_section_28_ion_button_13_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.removeInputField(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddRecibosComponent_section_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 22)(1, "ion-item-group")(2, "ion-item-divider", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-item")(5, "ion-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function AddRecibosComponent_section_28_Template_ion_select_ionChange_5_listener($event) {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.onChangeConcepto($event, i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddRecibosComponent_section_28_ion_select_option_6_Template, 2, 2, "ion-select-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-item")(8, "ion-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Mes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-datetime", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "ion-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AddRecibosComponent_section_28_ion_button_13_Template, 3, 0, "ion-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Conceptos #", i_r6 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.conceptos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("preferWheel", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.conceptoForm.length > 1);
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
    this.user = null;
    this.item = {
      FOLIO: 0,
      CASA: '',
      NOMBRE: '',
      CANTIDAD: '',
      CONCEPTO: '',
      FECHA: '',
      CORREO: '',
      INPUT_TIMESTAMP: '',
      PREFIX: ''
    };
    this.itemDetail = [];
    this.itemDetailConfirms = [];
    this.casas = [];
    this.conceptos = [];
    this.prefijos = [];
    this.data = false;
    this.sendEmail = false;
    this.date = new Date(); // Or the date you'd like converted.
    this.today = new Date(this.date.getTime() - this.date.getTimezoneOffset() * 60000);
    // super(loadingCtrl);
    this.fields = this.formBuilder.group({
      prefijo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
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
  /**
   * @deprecated Use getMaxFolio with subscription instead
   */
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
    const userStr = localStorage.getItem('user');
    this.user = userStr ? JSON.parse(userStr) : null;
    this.service.getFullData().subscribe({
      next: resp => {
        this.casas = resp || [];
        // this.dismiss();
        this.service.getConceptos().subscribe(resp => {
          this.conceptos = resp || [];
          // console.log(this.conceptos);
          // this.getMaxFolio();
        });
        this.service.getPrefijos().subscribe(resp => {
          this.prefijos = resp || [];
          this.calPrefijoUser();
          this.loadingUtil.dismiss();
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
  onChangePrefijo(event) {
    var _prefijo$FOLIO;
    const _prefijo = event.detail.value;
    if (!_prefijo) return;
    let prefijo = this.prefijos.find(data => data.NOMBRE === _prefijo.NOMBRE);
    this.fields.patchValue({
      folio: ((_prefijo$FOLIO = prefijo === null || prefijo === void 0 ? void 0 : prefijo.FOLIO) !== null && _prefijo$FOLIO !== void 0 ? _prefijo$FOLIO : 0) + 1
    });
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
          text: 'Guardar',
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
    var _recibo$prefijo$PREFI, _recibo$prefijo;
    let _casa = _recibo.casa;
    _recibo.casa = _casa.ID;
    let _folio = _recibo.folio;
    let _prefijo = (_recibo$prefijo$PREFI = (_recibo$prefijo = _recibo.prefijo) === null || _recibo$prefijo === void 0 ? void 0 : _recibo$prefijo.PREFIX) !== null && _recibo$prefijo$PREFI !== void 0 ? _recibo$prefijo$PREFI : '';
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
        this.itemDetail = this.convertMonth(this.itemDetail);
        this.calSavePrefijos(_folio, _prefijo);
        // this.confirm(this.itemDetail);
        this.otherSave(this.itemDetail);
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
  otherSave(_itemDetail) {
    var _this3 = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this3.actionSheetCtrl.create({
        header: '¿Desea agregar otro recibo ?',
        buttons: [{
          text: 'Otro recibo',
          role: 'other',
          icon: 'add',
          handler: () => {
            _this3.fields.reset();
            const formattedDate = _this3.today.toJSON().split('T')[0];
            _this3.fields.patchValue({
              fecha: formattedDate
            });
            _this3.calPrefijoUser();
            _this3.itemDetailConfirms.push(..._itemDetail);
          }
        }, {
          text: 'Salir',
          role: 'confirm',
          icon: 'checkmark',
          handler: () => {
            _this3.itemDetailConfirms.push(..._itemDetail);
            console.log(_this3.itemDetailConfirms);
            _this3.confirm(_this3.itemDetailConfirms);
          }
        }]
      });
      yield actionSheet.present();
    })();
  }
  convertMonth(itemDetail) {
    return itemDetail.map(item => {
      var _item$MES;
      // 1. Toma el string y separa
      const [yyyy, mm, dd] = ((_item$MES = item.MES) === null || _item$MES === void 0 ? void 0 : _item$MES.split('-')) || [];
      // 3. Crea fecha ISO agregando hora
      const isoString = `${yyyy}-${mm}-${dd}T06:00:00.000Z`;
      // 4. Devuelve el nuevo objeto con MES modificado
      return {
        ...item,
        MES: isoString
      };
    });
  }
  calPrefijoUser() {
    let prefijo = this.prefijos.find(data => {
      var _data$NOMBRE, _this$user, _this$user2;
      return ((_data$NOMBRE = data.NOMBRE) === null || _data$NOMBRE === void 0 ? void 0 : _data$NOMBRE.toUpperCase()) === ((_this$user = this.user) === null || _this$user === void 0 || (_this$user = _this$user.ID) === null || _this$user === void 0 ? void 0 : _this$user.toUpperCase()) && ((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.ROLE) === 'user';
    });
    if (prefijo) {
      this.fields.patchValue({
        prefijo: prefijo,
        folio: (prefijo === null || prefijo === void 0 ? void 0 : prefijo.FOLIO) + 1
      });
    }
  }
  calSavePrefijos(_folio, _prefijo) {
    if (!_prefijo) return;
    let prefijoToUpdate = this.prefijos.find(p => p.PREFIX === _prefijo);
    if (prefijoToUpdate) {
      prefijoToUpdate.FOLIO = _folio;
    }
  }
  fillEvent(_recibo) {
    var _recibo$prefijo$PREFI2, _recibo$prefijo2;
    // console.log("event", _recibo);
    this.item.FOLIO = _recibo.folio;
    let fecha = new Date(_recibo.fecha);
    this.item.FECHA = _recibo.fecha;
    this.item.CASA = _recibo.casa;
    this.item.NOMBRE = _recibo.nombre;
    this.item.CORREO = _recibo.email;
    this.item.CANTIDAD = _recibo.cantidad;
    this.item.PREFIX = (_recibo$prefijo$PREFI2 = (_recibo$prefijo2 = _recibo.prefijo) === null || _recibo$prefijo2 === void 0 ? void 0 : _recibo$prefijo2.PREFIX) !== null && _recibo$prefijo$PREFI2 !== void 0 ? _recibo$prefijo$PREFI2 : '';
    // console.log("this.item", this.item);
    var conceptos = _recibo.conceptos;
    this.itemDetail = [];
    if (conceptos) {
      this.item.CONCEPTO = _recibo.conceptos[0].concepto;
      //console.log("conceptos", conceptos);
      conceptos.forEach(data => {
        var _recibo$prefijo$PREFI3, _recibo$prefijo3;
        var detail = {};
        detail.FOLIO = _recibo.folio;
        detail.CASA = _recibo.casa;
        detail.NOMBRE = _recibo.nombre;
        detail.CONCEPTO = data.concepto;
        detail.MES = data.mes;
        detail.MONTO = data.monto;
        detail.PREFIX = (_recibo$prefijo$PREFI3 = (_recibo$prefijo3 = _recibo.prefijo) === null || _recibo$prefijo3 === void 0 ? void 0 : _recibo$prefijo3.PREFIX) !== null && _recibo$prefijo$PREFI3 !== void 0 ? _recibo$prefijo$PREFI3 : '';
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
  decls: 34,
  vars: 5,
  consts: [["slot", "start"], [3, "click"], ["name", "close"], [1, "ion-padding"], [3, "ngSubmit", "formGroup"], [4, "ngIf"], ["label", "Folio", "labelPlacement", "floating", "id", "folio", "type", "number", "formControlName", "folio"], ["label", "Fecha", "labelPlacement", "floating", "id", "fecha", "type", "date", "formControlName", "fecha"], ["label", "Casa", "labelPlacement", "floating", "id", "casa", "interface", "popover", "formControlName", "casa", 3, "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["label", "Nombre", "labelPlacement", "floating", "id", "nombre", "type", "text", "formControlName", "nombre"], ["label", "Email", "labelPlacement", "floating", "id", "email", "type", "email", "formControlName", "email"], ["id", "sendEmail", "item-right", "", "secondary", "", "formControlName", "sendEmail", "color", "green"], ["label", "Cantidad", "labelPlacement", "floating", "id", "cantidad", "type", "number", "formControlName", "cantidad"], ["slot", "start", "name", "cash", "aria-hidden", "true"], ["formArrayName", "conceptos", "margin-bottom", ""], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["size", "small", "fill", "clear", "color", "primary", 3, "click"], ["slot", "start", "name", "add"], ["type", "submit", "expand", "block", 3, "disabled"], ["label", "Prefix:", "labelPlacement", "floating", "interface", "popover", "id", "prefijo", "formControlName", "prefijo", 3, "ionChange"], [3, "value"], [3, "formGroupName"], ["color", "light"], ["label", "Concepto:", "labelPlacement", "floating", "interface", "popover", "id", "concepto", "formControlName", "concepto", 3, "ionChange"], ["floating", ""], ["id", "mes", "displayFormat", "MMM. YYYY", "formControlName", "mes", "monthShortNames", "Ene, Feb, Mar, Apr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic", "presentation", "month-year", 3, "preferWheel"], ["label", "Monto:", "labelPlacement", "floating", "id", "monto", "type", "number", "maxlength", "50", "formControlName", "monto"], ["size", "small", "fill", "clear", "color", "danger", 3, "click", 4, "ngIf"], ["size", "small", "fill", "clear", "color", "danger", 3, "click"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AddRecibosComponent_ion_item_9_Template, 3, 1, "ion-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ion-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-item")(15, "ion-select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function AddRecibosComponent_Template_ion_select_ionChange_15_listener($event) {
        return ctx.onChangeCasa($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AddRecibosComponent_ion_select_option_16_Template, 2, 3, "ion-select-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "ion-select-option")(18, "ion-select-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "ion-input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "ion-input", 11)(23, "ion-checkbox", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "ion-item")(25, "ion-input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AddRecibosComponent_section_28_Template, 14, 5, "section", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddRecibosComponent_Template_ion_button_click_29_listener() {
        return ctx.addNewInputField();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "ion-icon", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " nuevo concepto ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "ion-button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Agregar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.fields);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.ROLE) === "admin" || (ctx.user == null ? null : ctx.user.ROLE) === "dev" || (ctx.user == null ? null : ctx.user.ROLE) === "manager");
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

/***/ 5441:
/*!*****************************************************************!*\
  !*** ./src/app/components/user-avatar/user-avatar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAvatarComponent: () => (/* binding */ UserAvatarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
var _UserAvatarComponent;



function UserAvatarComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.userName, " ");
  }
}
class UserAvatarComponent {
  constructor() {
    this.user = null;
    this.size = 'medium';
    this.initials = '';
    this.userName = '';
  }
  ngOnInit() {
    this.loadUserData();
  }
  ngOnChanges() {
    this.loadUserData();
  }
  loadUserData() {
    if (this.user) {
      this.userName = this.user.NOMBRE || '';
      this.initials = this.getInitials(this.userName);
    } else {
      // Si no hay usuario pasado como input, intentar obtenerlo del localStorage
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        this.userName = user.NOMBRE || '';
        this.initials = this.getInitials(this.userName);
      } else {
        this.userName = '';
        this.initials = '';
      }
    }
  }
  getInitials(name) {
    if (!name) return '';
    const words = name.trim().split(' ');
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    } else {
      return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
    }
  }
  getSizeClass() {
    return `avatar-${this.size}`;
  }
}
_UserAvatarComponent = UserAvatarComponent;
_UserAvatarComponent.ɵfac = function UserAvatarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserAvatarComponent)();
};
_UserAvatarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _UserAvatarComponent,
  selectors: [["app-user-avatar"]],
  inputs: {
    user: "user",
    size: "size"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 5,
  vars: 5,
  consts: [[1, "user-avatar-container", 3, "title", "id"], [1, "user-avatar", 3, "ngClass"], [1, "initials"], ["class", "user-tooltip", 4, "ngIf"], [1, "user-tooltip"]],
  template: function UserAvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserAvatarComponent_div_4_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.userName)("id", "user-avatar-" + ctx.size);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getSizeClass());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.initials);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userName);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: ["@charset \"UTF-8\";\n.user-avatar-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.user-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  font-weight: bold;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  transition: all 0.3s ease;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n}\n\n.user-avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n}\n\n.initials[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  letter-spacing: 0.5px;\n}\n\n\n\n.avatar-small[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  font-size: 12px;\n}\n\n.avatar-medium[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  font-size: 14px;\n}\n\n.avatar-large[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  font-size: 16px;\n}\n\n\n\n.user-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 8px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 1000;\n  margin-bottom: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n\n.user-tooltip[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 5px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.8);\n}\n\n.user-avatar-container[_ngcontent-%COMP%]:hover   .user-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n\n\n\n@media (max-width: 768px) {\n  .avatar-small[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    font-size: 10px;\n  }\n  .avatar-medium[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    font-size: 12px;\n  }\n  .avatar-large[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 44px;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2VyLWF2YXRhci91c2VyLWF2YXRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0FBRUY7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLDBDQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQ0FBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0EsWUFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBLFlBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBQUVGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0EsZUFBQTtBQUNBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUFFRjtFQUNBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBQ0Y7RUFFQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQUFGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1hdmF0YXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVzZXItYXZhdGFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuLnVzZXItYXZhdGFyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4uaW5pdGlhbHMge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLyogVGFtYcODwrFvcyAqL1xuLmF2YXRhci1zbWFsbCB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmF2YXRhci1tZWRpdW0ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hdmF0YXItbGFyZ2Uge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi8qIFRvb2x0aXAgKi9cbi51c2VyLXRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgei1pbmRleDogMTAwMDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4udXNlci10b29sdGlwOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi51c2VyLWF2YXRhci1jb250YWluZXI6aG92ZXIgLnVzZXItdG9vbHRpcCB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8qIFJlc3BvbnNpdmUgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXZhdGFyLXNtYWxsIHtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICAuYXZhdGFyLW1lZGl1bSB7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICBcbiAgLmF2YXRhci1sYXJnZSB7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
//# sourceMappingURL=default-src_app_components_add-recibos_add-recibos_component_ts-src_app_components_user-avata-e317f0.e888bce649181b08.js.map