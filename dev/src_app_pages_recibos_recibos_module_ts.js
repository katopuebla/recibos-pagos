"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_recibos_recibos_module_ts"],{

/***/ 8133:
/*!*****************************************************!*\
  !*** ./src/app/components/casas/casas.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CasasComponent: () => (/* binding */ CasasComponent),
/* harmony export */   CasasDetailComponent: () => (/* binding */ CasasDetailComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _service_recibos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/recibos.service */ 7492);
/* harmony import */ var _utils_loadingUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/loadingUtil */ 7568);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/group-by.pipe */ 4435);

var _CasasComponent, _CasasDetailComponent;






function CasasComponent_ion_item_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CasasComponent_ion_item_3_Template_ion_item_click_0_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.openModal({
        casa: item_r2.ID
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", item_r2.ID, " - ", item_r2.NOMBRE, " ");
  }
}
function CasasDetailComponent_ion_item_group_8_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item")(1, "ion-grid")(2, "ion-row")(3, "ion-col")(4, "ion-note");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-col")(7, "ion-note", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-col")(10, "ion-note", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const detail_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](detail_r1.FOLIO);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](detail_r1.CONCEPTO.substr(0, 16));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 3, detail_r1.MONTO));
  }
}
function CasasDetailComponent_ion_item_group_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item-group")(1, "ion-item-divider", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CasasDetailComponent_ion_item_group_8_ion_item_5_Template, 13, 5, "ion-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 3, item_r2.header, "MMM.yy"), " : ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, ctx_r2.sumMonto(item_r2.details, item_r2.header)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r2.details);
  }
}
class CasasComponent {
  constructor(modalCtrl, service, loadingUtil) {
    this.modalCtrl = modalCtrl;
    this.service = service;
    this.loadingUtil = loadingUtil;
    this.items = [];
    this.itemsBackup = [];
  }
  /*ionViewDidLoad() {
    this.getdata();
  }*/
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.service.getSpreadSheetId().then(() => _this.getdata());
    })();
  }
  /*   doRefresh(refresher: { complete: () => void; }) {
      this.service.getFullData().subscribe((data: Casa[]) => {
        this.items = data;
        this.itemsBackup = this.items.slice();
        refresher.complete();
      });
    } */
  getdata() {
    var _this2 = this;
    this.service.getFullData().subscribe(/*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this2.items = data.filter((item, index, self) => index === self.findIndex(t => t.ID === item.ID));
        _this2.itemsBackup = _this2.items.slice();
        // this.loadingUtil.dismiss();
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    // this.loadingUtil.showing();
  }
  openModal(casa) {
    var _this3 = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalCtrl.create({
        component: CasasDetailComponent,
        componentProps: {
          casa: casa.casa
        }
      });
      yield modal.present();
    })();
  }
  getItems(ev) {
    // Reset items back to all of the items
    this.items = this.itemsBackup && this.itemsBackup.slice();
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.items = this.items && this.items.filter(item => {
        return item.ID && item.ID.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.NOMBRE && item.NOMBRE.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }
}
_CasasComponent = CasasComponent;
_CasasComponent.ɵfac = function CasasComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CasasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_recibos_service__WEBPACK_IMPORTED_MODULE_1__.RecibosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_utils_loadingUtil__WEBPACK_IMPORTED_MODULE_2__.LoadingUtil));
};
_CasasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _CasasComponent,
  selectors: [["app-casas"]],
  standalone: false,
  decls: 4,
  vars: 1,
  consts: [[3, "ionInput"], ["inset", ""], ["ion-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["ion-item", "", 3, "click"]],
  template: function CasasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-list-header")(1, "ion-searchbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionInput", function CasasComponent_Template_ion_searchbar_ionInput_1_listener($event) {
        return ctx.getItems($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-list", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CasasComponent_ion_item_3_Template, 2, 2, "ion-item", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
class CasasDetailComponent {
  constructor(modalCtrl, service, loadingUtil) {
    this.modalCtrl = modalCtrl;
    this.service = service;
    this.loadingUtil = loadingUtil;
    this.casa = "";
    this.items = [];
    this.name = "";
  }
  ngOnInit() {
    var _this4 = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.name = _this4.casa;
      yield _this4.service.getSpreadSheetId().then(() => _this4.getdata());
    })();
  }
  doRefresh(refresher) {
    this.service.getFullDataDetail().subscribe(data => {
      this.items = [...data.filter(value => value.CASA == this.name)];
      this.items.sort((a, b) => a.MES && b.MES && a.MES > b.MES ? -1 : 1);
      refresher.complete();
    });
  }
  getdata() {
    var _this5 = this;
    console.log(this.casa);
    this.service.recibosDetalle$.subscribe(/*#__PURE__*/function () {
      var _ref2 = (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this5.items = [...data.filter(value => value.CASA == _this5.name)];
        _this5.items.sort((a, b) => a.MES && b.MES && a.MES > b.MES ? -1 : 1);
        // this.loadingUtil.dismiss();
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    // this.loadingUtil.showing();
  }
  sumMonto(array, Id) {
    var values = array.filter(element => element.MES == Id);
    return values.reduce((sum, currentValue) => {
      return sum + currentValue.MONTO;
    }, 0);
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
}
_CasasDetailComponent = CasasDetailComponent;
_CasasDetailComponent.ɵfac = function CasasDetailComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CasasDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_recibos_service__WEBPACK_IMPORTED_MODULE_1__.RecibosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_utils_loadingUtil__WEBPACK_IMPORTED_MODULE_2__.LoadingUtil));
};
_CasasDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _CasasDetailComponent,
  selectors: [["app-casas-detail"]],
  inputs: {
    casa: "casa"
  },
  standalone: false,
  decls: 10,
  vars: 6,
  consts: [["start", ""], ["ion-button", "", 3, "click"], ["name", "close"], [4, "ngFor", "ngForOf"], ["color", "light"], ["color", "primary"]],
  template: function CasasDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-buttons", 0)(5, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CasasDetailComponent_Template_button_click_5_listener() {
        return ctx.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CasasDetailComponent_ion_item_group_8_Template, 6, 8, "ion-item-group", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "groupBy");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Detalle de ", ctx.name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](9, 2, ctx.items, "MES", "desc"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_3__.GroupByPipe],
  encapsulation: 2
});

/***/ }),

/***/ 7224:
/*!**************************************************!*\
  !*** ./src/app/components/casas/casas.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CasasComponentModule: () => (/* binding */ CasasComponentModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _casas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./casas.component */ 8133);
/* harmony import */ var src_app_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipes/group-by.pipe */ 4435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _CasasComponentModule;







class CasasComponentModule {}
_CasasComponentModule = CasasComponentModule;
_CasasComponentModule.ɵfac = function CasasComponentModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CasasComponentModule)();
};
_CasasComponentModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _CasasComponentModule
});
_CasasComponentModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CasasComponentModule, {
    declarations: [_casas_component__WEBPACK_IMPORTED_MODULE_0__.CasasComponent, _casas_component__WEBPACK_IMPORTED_MODULE_0__.CasasDetailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, src_app_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_1__.GroupByPipe],
    exports: [_casas_component__WEBPACK_IMPORTED_MODULE_0__.CasasComponent, _casas_component__WEBPACK_IMPORTED_MODULE_0__.CasasDetailComponent]
  });
})();

/***/ }),

/***/ 9797:
/*!*****************************************************!*\
  !*** ./src/app/components/folio/folio.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolioComponent: () => (/* binding */ FolioComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _utils_loadingUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/loadingUtil */ 7568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _service_recibos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/recibos.service */ 7492);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/group-by.pipe */ 4435);

var _FolioComponent;






function FolioComponent_ion_item_group_1_ion_item_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item")(1, "ion-grid")(2, "ion-row")(3, "ion-col")(4, "ion-note", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col")(8, "ion-note", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-col")(11, "ion-note", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const detail_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 3, detail_r1.MES, "MMM.yy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](detail_r1.CONCEPTO);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 6, detail_r1.MONTO));
  }
}
function FolioComponent_ion_item_group_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item-group")(1, "ion-item-divider", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FolioComponent_ion_item_group_1_ion_item_3_Template, 14, 8, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r2.header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r2.details);
  }
}
class FolioComponent extends _utils_loadingUtil__WEBPACK_IMPORTED_MODULE_1__.LoadingUtil {
  constructor(navCtrl, service, loadingCtrl) {
    super(loadingCtrl);
    this.navCtrl = navCtrl;
    this.service = service;
    this.items = [];
    this.itemsBackup = [];
  }
  /*ionViewDidLoad() {
    this.getdata();
  }*/
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.service.getSpreadSheetId().then(() => _this.getdata());
    })();
  }
  doRefresh(refresher) {
    this.service.getFullDataDetail().subscribe(data => {
      this.items = data;
      this.itemsBackup = this.items.slice();
      refresher.complete();
    });
  }
  getdata() {
    var _this2 = this;
    this.service.getFullDataDetail().subscribe(/*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this2.items = data;
        _this2.itemsBackup = _this2.items.slice();
        // this.dismiss();
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    // this.showing();
  }
  getItems(ev) {
    // Reset items back to all of the items
    this.items = this.itemsBackup.slice();
    // console.log("this.items", this.items);
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.items = this.items.filter(item => {
        return item.FOLIO == val;
      });
    }
  }
}
_FolioComponent = FolioComponent;
_FolioComponent.ɵfac = function FolioComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_recibos_service__WEBPACK_IMPORTED_MODULE_2__.RecibosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController));
};
_FolioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _FolioComponent,
  selectors: [["app-folio"]],
  standalone: false,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 3,
  vars: 4,
  consts: [[3, "ionInput"], [4, "ngFor", "ngForOf"], ["color", "light"], ["color", "primary"]],
  template: function FolioComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-searchbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionInput", function FolioComponent_Template_ion_searchbar_ionInput_0_listener($event) {
        return ctx.getItems($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FolioComponent_ion_item_group_1_Template, 4, 2, "ion-item-group", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "groupBy");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx.items, "FOLIO"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_3__.GroupByPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8712:
/*!**************************************************!*\
  !*** ./src/app/components/folio/folio.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolioComponentModule: () => (/* binding */ FolioComponentModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _folio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folio.component */ 9797);
/* harmony import */ var src_app_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipes/group-by.pipe */ 4435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _FolioComponentModule;







class FolioComponentModule {}
_FolioComponentModule = FolioComponentModule;
_FolioComponentModule.ɵfac = function FolioComponentModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FolioComponentModule)();
};
_FolioComponentModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _FolioComponentModule
});
_FolioComponentModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FolioComponentModule, {
    declarations: [_folio_component__WEBPACK_IMPORTED_MODULE_0__.FolioComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, src_app_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_1__.GroupByPipe],
    exports: [_folio_component__WEBPACK_IMPORTED_MODULE_0__.FolioComponent]
  });
})();

/***/ }),

/***/ 6977:
/*!*************************************************!*\
  !*** ./src/app/components/mes/mes.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MesComponent: () => (/* binding */ MesComponent),
/* harmony export */   MesDetailComponent: () => (/* binding */ MesDetailComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _utils_funtions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/funtions */ 8722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _service_recibos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/recibos.service */ 7492);
/* harmony import */ var src_app_utils_loadingUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/loadingUtil */ 7568);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/group-by.pipe */ 4435);

var _MesComponent, _MesDetailComponent;







function MesComponent_ion_item_4_ion_badge_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-badge", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r2.sizeMonto(item_r2.details, item_r2.header), " pago");
  }
}
function MesComponent_ion_item_4_ion_badge_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-badge", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r2.sizeMonto(item_r2.details, item_r2.header), " pago");
  }
}
function MesComponent_ion_item_4_ion_badge_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-badge", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r2.sizeMonto(item_r2.details, item_r2.header), " pagos");
  }
}
function MesComponent_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MesComponent_ion_item_4_Template_ion_item_click_0_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.openModal({
        detail: item_r2.details
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-label")(2, "ion-badge", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, MesComponent_ion_item_4_ion_badge_6_Template, 2, 1, "ion-badge", 4)(7, MesComponent_ion_item_4_ion_badge_7_Template, 2, 1, "ion-badge", 5)(8, MesComponent_ion_item_4_ion_badge_8_Template, 2, 1, "ion-badge", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.lastSumMonto(ctx_r2.itemsLastMonth, item_r2.header));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", item_r2.header, " - ", item_r2.details[0].NOMBRE.substr(0, 15), " : ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 7, ctx_r2.sumMonto(item_r2.details, item_r2.header)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.sizeMonto(item_r2.details, item_r2.header) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.sizeMonto(item_r2.details, item_r2.header) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.sizeMonto(item_r2.details, item_r2.header) > 1);
  }
}
function MesDetailComponent_ion_item_group_11_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-grid")(2, "ion-row")(3, "ion-col")(4, "ion-note");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-note");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col")(10, "ion-note", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-col")(13, "ion-note", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const detail_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", detail_r1.FOLIO, " -");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 4, detail_r1.MES, "MMM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](detail_r1.CONCEPTO.substr(0, 15));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 7, detail_r1.MONTO));
  }
}
function MesDetailComponent_ion_item_group_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item-group")(1, "ion-item-divider", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MesDetailComponent_ion_item_group_11_ion_item_4_Template, 16, 9, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", item_r2.header, " : ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, ctx_r2.sumMonto(item_r2.details, item_r2.header)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r2.details);
  }
}
class MesComponent extends _utils_funtions__WEBPACK_IMPORTED_MODULE_1__.Funtions {
  constructor(modalCtrl, service, loadingUtil) {
    super();
    this.modalCtrl = modalCtrl;
    this.service = service;
    this.loadingUtil = loadingUtil;
    this.items = []; // Initialize to an empty array
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.service.getSpreadSheetId().then(() => _this.getdata());
      /* await this.service.recibosDetalle$.subscribe((data: ReciboDetalle[]) => {
        this.items = data;
        // this.dismiss();
        this.items.sort((a, b) => (a.CASA && b.CASA && a.CASA > b.CASA ? 1 : -1));
        this.itemsBackup = this.items ? this.items.slice() : [];
        this.title = new Date().toDateString();
             let lastMonth = new Date().getMonth() - 1;
        this.itemsLastMonth = data.filter(mes => {
          return mes.MES && new Date(mes.MES).getMonth() === lastMonth;
        });
        this.itemsLastMonth.sort((a, b) => (a.CASA && b.CASA && a.CASA > b.CASA ? 1 : -1));
        this.loadingUtil.dismiss();
      }); */
      // Si necesitas cargar datos iniciales, puedes hacerlo aquí también
      // await this.service.getSpreadSheetId().then(() => this.getdata());
    })();
  }
  doRefresh(event) {
    this.service.getFullDataDetail().subscribe(data => {
      this.items = data.find(mes => new Date(mes.header).getMonth() == new Date().getMonth());
      event.target.complete();
    });
  }
  getdata() {
    // this.loadingUtil.showing();
    this.service.getFullDataDetail()
    // .pipe(
    //   finalize(() => this.loadingUtil.dismiss())
    // )
    .subscribe(data => {
      this.items = data;
      this.items.sort((a, b) => a.CASA && b.CASA && a.CASA > b.CASA ? 1 : -1);
      this.itemsBackup = this.items ? this.items.slice() : [];
      this.title = new Date().toDateString();
      let lastMonth = new Date().getMonth() - 1;
      this.itemsLastMonth = data.filter(mes => {
        return mes.MES && new Date(mes.MES).getMonth() === lastMonth;
      });
      this.itemsLastMonth.sort((a, b) => a.CASA && b.CASA && a.CASA > b.CASA ? 1 : -1);
    });
  }
  getItems(ev) {
    this.items = this.itemsBackup.slice();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter(item => {
        return item.CASA && item.CASA.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }
  openModal(detail) {
    var _this2 = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: MesDetailComponent,
        componentProps: {
          detail: detail.detail
        }
      });
      yield modal.present();
    })();
  }
}
_MesComponent = MesComponent;
_MesComponent.ɵfac = function MesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_recibos_service__WEBPACK_IMPORTED_MODULE_2__.RecibosService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_utils_loadingUtil__WEBPACK_IMPORTED_MODULE_3__.LoadingUtil));
};
_MesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _MesComponent,
  selectors: [["app-mes"]],
  standalone: false,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 6,
  vars: 9,
  consts: [[3, "ionInput", "placeholder"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["color", "light", "slot", "start"], ["color", "danger", 4, "ngIf"], ["color", "secondary", 4, "ngIf"], ["color", "danger"], ["color", "secondary"]],
  template: function MesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list-header")(1, "ion-searchbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInput", function MesComponent_Template_ion_searchbar_ionInput_1_listener($event) {
        return ctx.getItems($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MesComponent_ion_item_4_Template, 9, 9, "ion-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "groupBy");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "Pagos del mes de ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 3, ctx.title, "MMM.yy"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 6, ctx.items, "CASA"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_4__.GroupByPipe],
  encapsulation: 2
});
class MesDetailComponent extends _utils_funtions__WEBPACK_IMPORTED_MODULE_1__.Funtions {
  constructor(modalCtrl) {
    super();
    this.modalCtrl = modalCtrl;
    this.detail = [];
    this.items = []; // Initialize to an empty array
    this.itemsBackup = [];
  }
  ngOnInit() {
    this.items = this.detail; // recibe datos del modal
    this.itemsBackup = this.items ? this.items.slice() : [];
    this.title = this.items ? this.items[0].MES : '';
  }
  getItems(ev) {
    this.items = this.itemsBackup ? this.itemsBackup.slice() : [];
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter(item => {
        return item.CASA && item.CASA.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
}
_MesDetailComponent = MesDetailComponent;
_MesDetailComponent.ɵfac = function MesDetailComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MesDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController));
};
_MesDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _MesDetailComponent,
  selectors: [["app-mes-detail"]],
  inputs: {
    detail: "detail"
  },
  standalone: false,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 13,
  vars: 8,
  consts: [["slot", "start"], [3, "click"], ["name", "close"], [3, "ionInput"], [4, "ngFor", "ngForOf"], ["color", "light"], ["color", "primary"]],
  template: function MesDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-buttons", 0)(6, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MesDetailComponent_Template_ion_button_click_6_listener() {
        return ctx.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-content")(9, "ion-list-header")(10, "ion-searchbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInput", function MesDetailComponent_Template_ion_searchbar_ionInput_10_listener($event) {
        return ctx.getItems($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, MesDetailComponent_ion_item_group_11_Template, 5, 5, "ion-item-group", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "groupBy");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Detalle de ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 2, ctx.title, "MMM.yy"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 5, ctx.items, "CASA"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_4__.GroupByPipe],
  encapsulation: 2
});

/***/ }),

/***/ 6996:
/*!**********************************************!*\
  !*** ./src/app/components/mes/mes.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MesComponentModule: () => (/* binding */ MesComponentModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _mes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mes.component */ 6977);
/* harmony import */ var src_app_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipes/group-by.pipe */ 4435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _MesComponentModule;







class MesComponentModule {}
_MesComponentModule = MesComponentModule;
_MesComponentModule.ɵfac = function MesComponentModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MesComponentModule)();
};
_MesComponentModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _MesComponentModule
});
_MesComponentModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MesComponentModule, {
    declarations: [_mes_component__WEBPACK_IMPORTED_MODULE_0__.MesComponent, _mes_component__WEBPACK_IMPORTED_MODULE_0__.MesDetailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, src_app_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_1__.GroupByPipe],
    exports: [_mes_component__WEBPACK_IMPORTED_MODULE_0__.MesComponent, _mes_component__WEBPACK_IMPORTED_MODULE_0__.MesDetailComponent]
  });
})();

/***/ }),

/***/ 1337:
/*!*****************************************************!*\
  !*** ./src/app/components/meses/meses.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MesesComponent: () => (/* binding */ MesesComponent),
/* harmony export */   MesesDetailComponent: () => (/* binding */ MesesDetailComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _utils_funtions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/funtions */ 8722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _service_recibos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/recibos.service */ 7492);
/* harmony import */ var _utils_loadingUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/loadingUtil */ 7568);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/group-by.pipe */ 4435);

var _MesesComponent, _MesesDetailComponent;







function MesesComponent_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MesesComponent_ion_item_1_Template_ion_item_click_0_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.openModal({
        detail: item_r2.details
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, item_r2.header, "MMM.yy"), " ");
  }
}
function MesesDetailComponent_ion_item_group_11_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-grid")(2, "ion-row")(3, "ion-col")(4, "ion-note");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col")(7, "ion-note", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-col")(10, "ion-note", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const detail_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](detail_r1.FOLIO);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](detail_r1.CONCEPTO.substr(0, 15));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 3, detail_r1.MONTO));
  }
}
function MesesDetailComponent_ion_item_group_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item-group")(1, "ion-item-divider", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MesesDetailComponent_ion_item_group_11_ion_item_4_Template, 13, 5, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", item_r2.header, " : ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, ctx_r2.sumMonto(item_r2.details, item_r2.header)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r2.details);
  }
}
class MesesComponent extends _utils_funtions__WEBPACK_IMPORTED_MODULE_1__.Funtions {
  constructor(modalCtrl, service, loadingUtil) {
    super();
    this.modalCtrl = modalCtrl;
    this.service = service;
    this.loadingUtil = loadingUtil;
    this.items = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.service.getSpreadSheetId().then(() => _this.getdata());
    })();
  }
  doRefresh(refresher) {
    this.service.getFullDataDetail().subscribe(data => {
      this.items = [...data];
      refresher.complete();
      this.items.sort((a, b) => a.MES && b.MES && a.MES > b.MES ? -1 : 1);
    });
  }
  getdata() {
    var _this2 = this;
    // this.loadingUtil.showing();
    this.service.recibosDetalle$.subscribe(/*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this2.items = [...data];
        // this.loadingUtil.dismiss();
        _this2.items.sort((a, b) => a.MES && b.MES && a.MES > b.MES ? -1 : 1);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  openModal(detail) {
    var _this3 = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalCtrl.create({
        component: MesesDetailComponent,
        componentProps: {
          detail: detail.detail
        }
      });
      yield modal.present();
    })();
  }
}
_MesesComponent = MesesComponent;
_MesesComponent.ɵfac = function MesesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MesesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_recibos_service__WEBPACK_IMPORTED_MODULE_2__.RecibosService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_utils_loadingUtil__WEBPACK_IMPORTED_MODULE_3__.LoadingUtil));
};
_MesesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _MesesComponent,
  selectors: [["app-meses"]],
  standalone: false,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 3,
  vars: 5,
  consts: [["inset", ""], ["ion-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["ion-item", "", 3, "click"]],
  template: function MesesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-list", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MesesComponent_ion_item_1_Template, 3, 4, "ion-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "groupBy");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 1, ctx.items, "MES", "reverse"));
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_4__.GroupByPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
class MesesDetailComponent extends _utils_funtions__WEBPACK_IMPORTED_MODULE_1__.Funtions {
  constructor(modalCtrl) {
    super();
    this.modalCtrl = modalCtrl;
    this.detail = [];
    this.items = [];
    this.itemsBackup = [];
  }
  ngOnInit() {
    this.items = this.detail;
    this.itemsBackup = this.items ? this.items.slice() : [];
    this.title = this.items ? this.items[0].MES : '';
    // this.getdata();
  }
  getItems(ev) {
    // Reset items back to all of the items
    this.items = this.itemsBackup.slice();
    console.log("this.items", this.items);
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.items = this.items.filter(item => {
        return item.CASA && item.CASA.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
}
_MesesDetailComponent = MesesDetailComponent;
_MesesDetailComponent.ɵfac = function MesesDetailComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MesesDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController));
};
_MesesDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _MesesDetailComponent,
  selectors: [["app-meses-detail"]],
  inputs: {
    detail: "detail"
  },
  standalone: false,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 13,
  vars: 8,
  consts: [["start", ""], ["ion-button", "", 3, "click"], ["name", "close"], [3, "ionInput"], [4, "ngFor", "ngForOf"], ["color", "light"], ["color", "primary"]],
  template: function MesesDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-buttons", 0)(6, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MesesDetailComponent_Template_button_click_6_listener() {
        return ctx.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-content")(9, "ion-list-header")(10, "ion-searchbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInput", function MesesDetailComponent_Template_ion_searchbar_ionInput_10_listener($event) {
        return ctx.getItems($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, MesesDetailComponent_ion_item_group_11_Template, 5, 5, "ion-item-group", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "groupBy");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Detalle de ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 2, ctx.title, "MMM.yy"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 5, ctx.items, "CASA"));
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_4__.GroupByPipe],
  encapsulation: 2
});

/***/ }),

/***/ 6156:
/*!**************************************************!*\
  !*** ./src/app/components/meses/meses.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MesesComponentModule: () => (/* binding */ MesesComponentModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _meses_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meses.component */ 1337);
/* harmony import */ var src_app_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pipes/group-by.pipe */ 4435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _MesesComponentModule;







class MesesComponentModule {}
_MesesComponentModule = MesesComponentModule;
_MesesComponentModule.ɵfac = function MesesComponentModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MesesComponentModule)();
};
_MesesComponentModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _MesesComponentModule
});
_MesesComponentModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MesesComponentModule, {
    declarations: [_meses_component__WEBPACK_IMPORTED_MODULE_0__.MesesComponent, _meses_component__WEBPACK_IMPORTED_MODULE_0__.MesesDetailComponent],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, src_app_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_1__.GroupByPipe],
    exports: [_meses_component__WEBPACK_IMPORTED_MODULE_0__.MesesComponent, _meses_component__WEBPACK_IMPORTED_MODULE_0__.MesesDetailComponent]
  });
})();

/***/ }),

/***/ 3943:
/*!*********************************************************!*\
  !*** ./src/app/pages/recibos/recibos-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecibosPageRoutingModule: () => (/* binding */ RecibosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _recibos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recibos.page */ 8681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _RecibosPageRoutingModule;




const routes = [{
  path: '',
  component: _recibos_page__WEBPACK_IMPORTED_MODULE_0__.RecibosPage
}];
class RecibosPageRoutingModule {}
_RecibosPageRoutingModule = RecibosPageRoutingModule;
_RecibosPageRoutingModule.ɵfac = function RecibosPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecibosPageRoutingModule)();
};
_RecibosPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _RecibosPageRoutingModule
});
_RecibosPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RecibosPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3238:
/*!*************************************************!*\
  !*** ./src/app/pages/recibos/recibos.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecibosPageModule: () => (/* binding */ RecibosPageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _recibos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recibos.page */ 8681);
/* harmony import */ var _recibos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recibos-routing.module */ 3943);
/* harmony import */ var _components_mes_mes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/mes/mes.module */ 6996);
/* harmony import */ var _components_meses_meses_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meses/meses.module */ 6156);
/* harmony import */ var _components_folio_folio_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/folio/folio.module */ 8712);
/* harmony import */ var _components_casas_casas_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/casas/casas.module */ 7224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
var _RecibosPageModule;










class RecibosPageModule {}
_RecibosPageModule = RecibosPageModule;
_RecibosPageModule.ɵfac = function RecibosPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecibosPageModule)();
};
_RecibosPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _RecibosPageModule
});
_RecibosPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _recibos_routing_module__WEBPACK_IMPORTED_MODULE_1__.RecibosPageRoutingModule, _components_mes_mes_module__WEBPACK_IMPORTED_MODULE_2__.MesComponentModule, _components_meses_meses_module__WEBPACK_IMPORTED_MODULE_3__.MesesComponentModule, _components_folio_folio_module__WEBPACK_IMPORTED_MODULE_4__.FolioComponentModule, _components_casas_casas_module__WEBPACK_IMPORTED_MODULE_5__.CasasComponentModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](RecibosPageModule, {
    declarations: [_recibos_page__WEBPACK_IMPORTED_MODULE_0__.RecibosPage],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _recibos_routing_module__WEBPACK_IMPORTED_MODULE_1__.RecibosPageRoutingModule, _components_mes_mes_module__WEBPACK_IMPORTED_MODULE_2__.MesComponentModule, _components_meses_meses_module__WEBPACK_IMPORTED_MODULE_3__.MesesComponentModule, _components_folio_folio_module__WEBPACK_IMPORTED_MODULE_4__.FolioComponentModule, _components_casas_casas_module__WEBPACK_IMPORTED_MODULE_5__.CasasComponentModule]
  });
})();

/***/ }),

/***/ 8681:
/*!***********************************************!*\
  !*** ./src/app/pages/recibos/recibos.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecibosPage: () => (/* binding */ RecibosPage)
/* harmony export */ });
/* harmony import */ var _home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _app_components_add_recibos_add_recibos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/components/add-recibos/add-recibos.component */ 4885);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var src_app_service_recibos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/recibos.service */ 7492);
/* harmony import */ var src_app_utils_loadingUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/loadingUtil */ 7568);
/* harmony import */ var src_app_utils_alertUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/alertUtil */ 7578);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _components_mes_mes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/mes/mes.component */ 6977);
/* harmony import */ var _components_meses_meses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/meses/meses.component */ 1337);
/* harmony import */ var _components_folio_folio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/folio/folio.component */ 9797);
/* harmony import */ var _components_casas_casas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/casas/casas.component */ 8133);

var _RecibosPage;













function RecibosPage_ion_fab_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-fab", 11)(1, "ion-fab-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RecibosPage_ion_fab_12_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.openModal({
        new: "Add"
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function RecibosPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-mes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RecibosPage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-meses");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RecibosPage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-casas");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RecibosPage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-folio");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
class RecibosPage {
  constructor(modalCtrl, recibosService, loadingUtil, alertUtil) {
    this.modalCtrl = modalCtrl;
    this.recibosService = recibosService;
    this.loadingUtil = loadingUtil;
    this.alertUtil = alertUtil;
    this.option = 'Mes';
    this.isAndroid = false;
    this.role = '';
    this.itemsRecibos = []; // Initialize to an empty array
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.recibosService.getSpreadSheetId().then(() => _this.getdata());
      const user = localStorage.getItem('user');
      _this.role = user ? JSON.parse(user).ROLE : '';
      // Si tienes un método para cargar los recibos, úsalo aquí y actualiza el BehaviorSubject
      // Por ejemplo:
      // this.loadRecibos();
    })();
  }
  doRefresh(event) {
    event.target.complete();
  }
  getdata() {
    var _this2 = this;
    this.loadingUtil.showing();
    this.recibosService.getFullDataDetail().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => this.loadingUtil.dismiss())).subscribe(/*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this2.itemsRecibos = [...data];
        _this2.itemsRecibos = [..._this2.itemsRecibos];
        // this.recibosService.recibosDetalle$.next(this.itemsRecibos); // Actualiza el observable compartido
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), error => {
      this.alertUtil.showError('Error al cargar recibos: ' + error);
    });
  }
  // Cuando agregues recibos nuevos:
  openModal(characterNum) {
    var _this3 = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = {};
      if (characterNum.new === 'Add') {
        modal = yield _this3.modalCtrl.create({
          component: _app_components_add_recibos_add_recibos_component__WEBPACK_IMPORTED_MODULE_1__.AddRecibosComponent,
          componentProps: characterNum
        });
      } else if (characterNum.new === 'PicTicket') {
        modal = yield _this3.modalCtrl.create({
          component: _app_components_add_recibos_add_recibos_component__WEBPACK_IMPORTED_MODULE_1__.AddRecibosComponent,
          componentProps: characterNum
        });
      }
      yield modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();
      if (role === 'confirm' && Array.isArray(data) && data.length > 0) {
        _this3.itemsRecibos.push(...data);
        _this3.itemsRecibos = [..._this3.itemsRecibos];
        _this3.recibosService.recibosDetalle$.next(_this3.itemsRecibos); // Actualiza el observable compartido
      }
    })();
  }
}
_RecibosPage = RecibosPage;
_RecibosPage.ɵfac = function RecibosPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecibosPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_recibos_service__WEBPACK_IMPORTED_MODULE_2__.RecibosService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_utils_loadingUtil__WEBPACK_IMPORTED_MODULE_3__.LoadingUtil), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_utils_alertUtil__WEBPACK_IMPORTED_MODULE_4__.AlertUtil));
};
_RecibosPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: _RecibosPage,
  selectors: [["app-recibos"]],
  standalone: false,
  decls: 20,
  vars: 7,
  consts: [["color", "primary"], [3, "ngModelChange", "ngModel"], ["value", "Mes"], ["value", "Meses"], ["value", "Casa"], ["value", "Folio"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end", 4, "ngIf"], ["slot", "fixed", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "pullingText", "Pull to refresh", "refreshingSpinner", "circles", "refreshingText", "Refrescando..."], [3, "ngSwitch"], [4, "ngSwitchCase"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end"], [3, "click"], ["name", "add"]],
  template: function RecibosPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-segment", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function RecibosPage_Template_ion_segment_ngModelChange_2_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.option, $event) || (ctx.option = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-segment-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Mes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-segment-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " Meses ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-segment-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Casa ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ion-segment-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " Folio ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, RecibosPage_ion_fab_12_Template, 3, 0, "ion-fab", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-refresher", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionRefresh", function RecibosPage_Template_ion_refresher_ionRefresh_13_listener($event) {
        return ctx.doRefresh($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "ion-refresher-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](15, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, RecibosPage_div_16_Template, 2, 0, "div", 10)(17, RecibosPage_div_17_Template, 2, 0, "div", 10)(18, RecibosPage_div_18_Template, 2, 0, "div", 10)(19, RecibosPage_div_19_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.option);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.role != "reader");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitch", ctx.option);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "Mes");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "Meses");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "Casa");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", "Folio");
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.SelectValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _components_mes_mes_component__WEBPACK_IMPORTED_MODULE_5__.MesComponent, _components_meses_meses_component__WEBPACK_IMPORTED_MODULE_6__.MesesComponent, _components_folio_folio_component__WEBPACK_IMPORTED_MODULE_7__.FolioComponent, _components_casas_casas_component__WEBPACK_IMPORTED_MODULE_8__.CasasComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8722:
/*!***********************************!*\
  !*** ./src/app/utils/funtions.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Funtions: () => (/* binding */ Funtions)
/* harmony export */ });
class Funtions {
  lastSumMonto(array, Id) {
    var values = array.filter(element => element.CASA == Id);
    return values.reduce((sum, currentValue) => {
      return sum + currentValue.MONTO;
    }, 0);
  }
  sumMonto(array, Id) {
    var values = array.filter(element => element.CASA == Id);
    let today = new Date().getMonth();
    values = values.filter(mes => {
      return new Date(mes.MES).getMonth() === today;
    });
    return values.reduce((sum, currentValue) => {
      return sum + currentValue.MONTO;
    }, 0);
  }
  sizeMonto(array, Id) {
    var values = array.filter(element => element.CASA == Id);
    let today = new Date().getMonth();
    values = values.filter(mes => {
      return new Date(mes.MES).getMonth() === today;
    });
    return values.length;
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recibos_recibos_module_ts.js.map