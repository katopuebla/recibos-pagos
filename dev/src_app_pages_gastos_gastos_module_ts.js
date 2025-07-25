"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_gastos_gastos_module_ts"],{

/***/ 2995:
/*!*******************************************************!*\
  !*** ./src/app/pages/gastos/gastos-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GastosPageRoutingModule: () => (/* binding */ GastosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _gastos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gastos.page */ 2501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _GastosPageRoutingModule;




const routes = [{
  path: '',
  component: _gastos_page__WEBPACK_IMPORTED_MODULE_0__.GastosPage
}];
class GastosPageRoutingModule {}
_GastosPageRoutingModule = GastosPageRoutingModule;
_GastosPageRoutingModule.ɵfac = function GastosPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GastosPageRoutingModule)();
};
_GastosPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _GastosPageRoutingModule
});
_GastosPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GastosPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1714:
/*!***********************************************!*\
  !*** ./src/app/pages/gastos/gastos.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GastosPageModule: () => (/* binding */ GastosPageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _gastos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gastos.page */ 2501);
/* harmony import */ var _gastos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gastos-routing.module */ 2995);
/* harmony import */ var src_app_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/group-by.pipe */ 4435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
var _GastosPageModule;







class GastosPageModule {}
_GastosPageModule = GastosPageModule;
_GastosPageModule.ɵfac = function GastosPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GastosPageModule)();
};
_GastosPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _GastosPageModule
});
_GastosPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _gastos_routing_module__WEBPACK_IMPORTED_MODULE_1__.GastosPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GastosPageModule, {
    declarations: [_gastos_page__WEBPACK_IMPORTED_MODULE_0__.GastosPage],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _gastos_routing_module__WEBPACK_IMPORTED_MODULE_1__.GastosPageRoutingModule, src_app_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_2__.GroupByPipe]
  });
})();

/***/ }),

/***/ 2501:
/*!*********************************************!*\
  !*** ./src/app/pages/gastos/gastos.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GastosPage: () => (/* binding */ GastosPage)
/* harmony export */ });
/* harmony import */ var _home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _components_add_gastos_add_gastos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/add-gastos/add-gastos.component */ 2865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _service_gastos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/gastos.service */ 5176);
/* harmony import */ var _utils_loadingUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/loadingUtil */ 7568);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/group-by.pipe */ 4435);

var _GastosPage;







function GastosPage_ion_fab_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-fab", 8)(1, "ion-fab-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GastosPage_ion_fab_5_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openModal({
        new: "Add"
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function GastosPage_ion_item_group_10_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "div", 12)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const detail_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](detail_r3.Nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", detail_r3.Categoria, " -- ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 3, detail_r3.Monto), " ");
  }
}
function GastosPage_ion_item_group_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item-group")(1, "ion-item-divider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, GastosPage_ion_item_group_10_ion_item_4_Template, 8, 5, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 2, item_r4.header, "MMM.dd.yy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r4.details);
  }
}
class GastosPage {
  constructor(modalCtrl, navCtrl, service, loadUtil) {
    this.modalCtrl = modalCtrl;
    this.navCtrl = navCtrl;
    this.service = service;
    this.loadUtil = loadUtil;
    this.items = [];
    this.itemsBackup = [];
    this.role = '';
  }
  ngOnInit() {
    this.service.getSpreadSheetId().then(() => this.getdata());
    const user = localStorage.getItem('user');
    this.role = user ? JSON.parse(user).ROLE : '';
  }
  doRefresh(event) {
    this.service.getFullDataDetail().subscribe(data => {
      this.items = [...data]; // Fuerza nueva referencia para refrescar la vista
      this.itemsBackup = [...this.items];
      event.target.complete();
    });
  }
  getdata() {
    var _this = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.service.getFullDataDetail().subscribe(data => {
        _this.items = [...data]; // Fuerza nueva referencia para refrescar la vista
        _this.itemsBackup = [..._this.items];
        _this.loadUtil.dismiss();
      });
      _this.loadUtil.showing();
    })();
  }
  getItems(ev) {
    // Reset items back to all of the items
    // console.log(this.items);
    this.items = this.itemsBackup;
    // console.log("this.items", this.items);
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter(item => {
        return item.Categoria && item.Categoria.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.Nombre && item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }
  openModal(detail) {
    var _this2 = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: _components_add_gastos_add_gastos_component__WEBPACK_IMPORTED_MODULE_1__.AddGastosComponent,
        componentProps: {
          detail: detail.detail
        }
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();
      if (role === 'confirm' && data && Array.isArray(data)) {
        _this2.items.push(...data);
        _this2.items = [..._this2.items]; // Fuerza refresco de la vista
        _this2.itemsBackup = [..._this2.items];
        _this2.service.gastosDetalle$.next(_this2.items); // Actualiza el observable compartido
      }
    })();
  }
}
_GastosPage = GastosPage;
_GastosPage.ɵfac = function GastosPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GastosPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_gastos_service__WEBPACK_IMPORTED_MODULE_2__.GastosService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_utils_loadingUtil__WEBPACK_IMPORTED_MODULE_3__.LoadingUtil));
};
_GastosPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _GastosPage,
  selectors: [["app-gastos"]],
  standalone: false,
  decls: 12,
  vars: 7,
  consts: [[3, "translucent"], ["color", "primary"], [1, "ion-padding"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end", 4, "ngIf"], [3, "ionInput"], ["slot", "fixed", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "pullingText", "Pull to refresh", "refreshingSpinner", "circles", "refreshingText", "Refrescando..."], [4, "ngFor", "ngForOf"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end"], [3, "click"], ["name", "add"], ["color", "light"], ["ion-text", "", "color", "primary"]],
  template: function GastosPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Gastos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, GastosPage_ion_fab_5_Template, 3, 0, "ion-fab", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-list-header")(7, "ion-searchbar", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionInput", function GastosPage_Template_ion_searchbar_ionInput_7_listener($event) {
        return ctx.getItems($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-refresher", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionRefresh", function GastosPage_Template_ion_refresher_ionRefresh_8_listener($event) {
        return ctx.doRefresh($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "ion-refresher-content", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, GastosPage_ion_item_group_10_Template, 5, 5, "ion-item-group", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "groupBy");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.role != "reader");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](11, 3, ctx.items, "Fecha", "reverse"));
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_4__.GroupByPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gastos_gastos_module_ts.js.map