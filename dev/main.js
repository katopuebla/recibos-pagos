(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _guard_no_ingresado_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guard/no-ingresado.guard */ 1147);
/* harmony import */ var _guard_ingresado_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/ingresado.guard */ 3263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _AppRoutingModule;





const routes = [{
  path: '',
  redirectTo: '/tabs/home',
  pathMatch: 'full'
}, {
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 637)).then(m => m.TabsPageModule),
  canActivate: [_guard_ingresado_guard__WEBPACK_IMPORTED_MODULE_1__.ingresadoGuard]
}, {
  path: 'login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 9370)).then(m => m.LoginPageModule),
  canActivate: [_guard_no_ingresado_guard__WEBPACK_IMPORTED_MODULE_0__.noIngresadoGuard]
}];
class AppRoutingModule {}
_AppRoutingModule = AppRoutingModule;
_AppRoutingModule.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppRoutingModule)();
};
_AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _AppRoutingModule
});
_AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules
  }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1507);
var _AppComponent;


class AppComponent {
  constructor() {}
}
_AppComponent = AppComponent;
_AppComponent.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _AppComponent,
  selectors: [["app-root"]],
  standalone: false,
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-app");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonRouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/service.module */ 9679);
/* harmony import */ var _utils_toastUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/toastUtil */ 3511);
/* harmony import */ var _utils_loadingUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/loadingUtil */ 7568);
/* harmony import */ var _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/group-by.pipe */ 4435);
/* harmony import */ var _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/order-by.pipe */ 4836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
var _AppModule;












class AppModule {}
_AppModule = AppModule;
_AppModule.ɵfac = function AppModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppModule)();
};
_AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: _AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy
  }, _utils_toastUtil__WEBPACK_IMPORTED_MODULE_3__.ToastUtil, _utils_loadingUtil__WEBPACK_IMPORTED_MODULE_4__.LoadingUtil],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _service_service_module__WEBPACK_IMPORTED_MODULE_2__.ServiceModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _service_service_module__WEBPACK_IMPORTED_MODULE_2__.ServiceModule, _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_5__.GroupByPipe, _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_6__.OrderByPipe]
  });
})();

/***/ }),

/***/ 3263:
/*!******************************************!*\
  !*** ./src/app/guard/ingresado.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ingresadoGuard: () => (/* binding */ ingresadoGuard)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


const ingresadoGuard = (route, state) => {
  if (localStorage.getItem('user')) {
    return true;
  }
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  router.navigate(['/login']);
  return false;
};

/***/ }),

/***/ 1147:
/*!*********************************************!*\
  !*** ./src/app/guard/no-ingresado.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noIngresadoGuard: () => (/* binding */ noIngresadoGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


const noIngresadoGuard = (route, state) => {
  if (!localStorage.getItem('user')) {
    return true;
  }
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  router.navigate(['/tabs/home']);
  return false;
};

/***/ }),

/***/ 2018:
/*!*****************************************!*\
  !*** ./src/app/mocks/mock-catalogos.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MOCK_CATALOGOS: () => (/* binding */ MOCK_CATALOGOS)
/* harmony export */ });
// Datos de prueba para Catalogos
const MOCK_CATALOGOS = [{
  ID: 'A1',
  NOMBRE: 'Casa 1',
  EMAIL: 'casa1@email.com',
  EMAIL_CCP: 'ccp1@email.com'
}, {
  ID: 'A2',
  NOMBRE: 'Casa 2',
  EMAIL: 'casa2@email.com',
  EMAIL_CCP: 'ccp2@email.com'
}, {
  ID: 'A3',
  NOMBRE: 'Casa 3',
  EMAIL: 'casa3@email.com',
  EMAIL_CCP: 'ccp3@email.com'
}, {
  ID: 'A4',
  NOMBRE: 'Casa 4',
  EMAIL: 'casa4@email.com',
  EMAIL_CCP: 'ccp4@email.com'
}];

/***/ }),

/***/ 9133:
/*!*****************************************!*\
  !*** ./src/app/mocks/mock-conceptos.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MOCK_CONCEPTOS: () => (/* binding */ MOCK_CONCEPTOS)
/* harmony export */ });
const MOCK_CONCEPTOS = [{
  NOMBRE: 'Renta'
}, {
  NOMBRE: 'Mantenimiento'
}, {
  NOMBRE: 'Agua'
}, {
  NOMBRE: 'Luz'
}, {
  NOMBRE: 'Limpieza'
}, {
  NOMBRE: 'Seguro'
}, {
  NOMBRE: 'Internet'
}];

/***/ }),

/***/ 8486:
/*!**************************************!*\
  !*** ./src/app/mocks/mock-gastos.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MOCK_CATEGORIAS: () => (/* binding */ MOCK_CATEGORIAS),
/* harmony export */   MOCK_GASTOS: () => (/* binding */ MOCK_GASTOS),
/* harmony export */   MOCK_GASTOS_DETALLE: () => (/* binding */ MOCK_GASTOS_DETALLE)
/* harmony export */ });
const MOCK_GASTOS = [{
  Categoria: 'Mantenimiento',
  Nombre: 'Reparación de plomería',
  Fecha: '2025-06-05',
  Monto: '300',
  Commentario: 'Cambio de llave en baño'
}, {
  Categoria: 'Suministros',
  Nombre: 'Compra de focos',
  Fecha: '2025-06-10',
  Monto: '150',
  Commentario: 'Focos LED para pasillo'
}, {
  Categoria: 'Servicios',
  Nombre: 'Pago de agua',
  Fecha: '2025-06-15',
  Monto: '500',
  Commentario: 'Pago bimestral'
}, {
  Categoria: 'Mantenimiento',
  Nombre: 'Pintura',
  Fecha: '2025-05-20',
  Monto: '1200',
  Commentario: 'Pintura de fachada'
}];
const MOCK_GASTOS_DETALLE = [{
  Categoria: 'Mantenimiento',
  Nombre: 'Reparación de plomería',
  Fecha: '2025-06-05',
  Monto: '300',
  Commentario: 'Cambio de llave en baño'
}, {
  Categoria: 'Suministros',
  Nombre: 'Compra de focos',
  Fecha: '2025-06-10',
  Monto: '150',
  Commentario: 'Focos LED para pasillo'
}, {
  Categoria: 'Servicios',
  Nombre: 'Pago de agua',
  Fecha: '2025-06-15',
  Monto: '500',
  Commentario: 'Pago bimestral'
}];
const MOCK_CATEGORIAS = [{
  Nombre: 'Mantenimiento',
  Tipo: 'Gasto',
  PersonaServicio: 'Juan Albañil'
}, {
  Nombre: 'Suministros',
  Tipo: 'Gasto',
  PersonaServicio: 'Ferretería Central'
}, {
  Nombre: 'Servicios',
  Tipo: 'Gasto',
  PersonaServicio: 'Agua Municipal'
}, {
  Nombre: 'Limpieza',
  Tipo: 'Gasto',
  PersonaServicio: 'Limpieza Express'
}];

/***/ }),

/***/ 5030:
/*!***********************************************!*\
  !*** ./src/app/mocks/mock-recibos-detalle.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MOCK_RECIBOS_DETALLE: () => (/* binding */ MOCK_RECIBOS_DETALLE)
/* harmony export */ });
const MOCK_RECIBOS_DETALLE = [{
  FOLIO: 1,
  CASA: 'A1',
  NOMBRE: 'Juan Pérez',
  CONCEPTO: 'Renta',
  MES: '2025-06',
  MONTO: '1200',
  INPUT_TIMESTAMP: '2025-06-01T10:00:00'
}, {
  FOLIO: 2,
  CASA: 'A2',
  NOMBRE: 'Ana López',
  CONCEPTO: 'Renta',
  MES: '2025-07',
  MONTO: '1200',
  INPUT_TIMESTAMP: '2025-07-01T10:00:00'
}, {
  FOLIO: 3,
  CASA: 'A1',
  NOMBRE: 'Juan Pérez',
  CONCEPTO: 'Mantenimiento',
  MES: '2025-06',
  MONTO: '800',
  INPUT_TIMESTAMP: '2025-06-15T09:00:00'
}];

/***/ }),

/***/ 3280:
/*!***************************************!*\
  !*** ./src/app/mocks/mock-recibos.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MOCK_RECIBOS: () => (/* binding */ MOCK_RECIBOS),
/* harmony export */   MOCK_RECIBO_MAX_FOLIO: () => (/* binding */ MOCK_RECIBO_MAX_FOLIO)
/* harmony export */ });
const MOCK_RECIBO_MAX_FOLIO = {
  FOLIO: 3
};
const MOCK_RECIBOS = [{
  FOLIO: 1,
  CASA: 'A1',
  NOMBRE: 'Juan Pérez',
  CANTIDAD: '1200',
  CONCEPTO: 'Pago de renta junio',
  FECHA: '2025-06-01',
  CORREO: 'juan.perez@email.com',
  INPUT_TIMESTAMP: '2025-06-01T10:00:00'
}, {
  FOLIO: 2,
  CASA: 'A2',
  NOMBRE: 'Ana López',
  CANTIDAD: '1200',
  CONCEPTO: 'Pago de renta julio',
  FECHA: '2025-07-01',
  CORREO: 'ana.lopez@email.com',
  INPUT_TIMESTAMP: '2025-07-01T10:00:00'
}, {
  FOLIO: 3,
  CASA: 'A1',
  NOMBRE: 'Juan Pérez',
  CANTIDAD: '800',
  CONCEPTO: 'Pago de mantenimiento',
  FECHA: '2025-06-15',
  CORREO: 'juan.perez@email.com',
  INPUT_TIMESTAMP: '2025-06-15T09:00:00'
}, {
  FOLIO: 4,
  CASA: 'A3',
  NOMBRE: 'Carlos Ruiz',
  CANTIDAD: '500',
  CONCEPTO: 'Pago de agua',
  FECHA: '2025-05-20',
  CORREO: 'carlos.ruiz@email.com',
  INPUT_TIMESTAMP: '2025-05-20T08:00:00'
}, {
  FOLIO: 5,
  CASA: 'A2',
  NOMBRE: 'Ana López',
  CANTIDAD: '950',
  CONCEPTO: 'Pago de luz',
  FECHA: '2025-04-10',
  CORREO: 'ana.lopez@email.com',
  INPUT_TIMESTAMP: '2025-04-10T11:00:00'
}, {
  FOLIO: 6,
  CASA: 'A4',
  NOMBRE: 'Luis Gómez',
  CANTIDAD: '1200',
  CONCEPTO: 'Pago de renta marzo',
  FECHA: '2025-03-05',
  CORREO: 'luis.gomez@email.com',
  INPUT_TIMESTAMP: '2025-03-05T12:00:00'
}, {
  FOLIO: 7,
  CASA: 'A1',
  NOMBRE: 'Juan Pérez',
  CANTIDAD: '1200',
  CONCEPTO: 'Pago de renta febrero',
  FECHA: '2025-02-01',
  CORREO: 'juan.perez@email.com',
  INPUT_TIMESTAMP: '2025-02-01T10:00:00'
}, {
  FOLIO: 8,
  CASA: 'A5',
  NOMBRE: 'María Torres',
  CANTIDAD: '1200',
  CONCEPTO: 'Pago de renta enero',
  FECHA: '2025-01-01',
  CORREO: 'maria.torres@email.com',
  INPUT_TIMESTAMP: '2025-01-01T10:00:00'
}, {
  FOLIO: 9,
  CASA: 'A3',
  NOMBRE: 'Carlos Ruiz',
  CANTIDAD: '300',
  CONCEPTO: 'Pago parcial de renta',
  FECHA: '2025-06-25',
  CORREO: 'carlos.ruiz@email.com',
  INPUT_TIMESTAMP: '2025-06-25T13:00:00'
}, {
  FOLIO: 10,
  CASA: 'A2',
  NOMBRE: 'Ana López',
  CANTIDAD: '1200',
  CONCEPTO: 'Pago de renta junio (atrasado)',
  FECHA: '2025-06-30',
  CORREO: 'ana.lopez@email.com',
  INPUT_TIMESTAMP: '2025-06-30T14:00:00'
}];

/***/ }),

/***/ 1674:
/*!****************************************!*\
  !*** ./src/app/mocks/mock-usuarios.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MOCK_USUARIOS: () => (/* binding */ MOCK_USUARIOS)
/* harmony export */ });
const MOCK_USUARIOS = [{
  ID: 'admin',
  PASSWORD: 'admin123',
  NOMBRE: 'Administrador',
  EMAIL: 'admin@email.com',
  TELEFONO: '555-0000',
  ROLE: 'admin'
}, {
  ID: 'juan',
  PASSWORD: 'juanpass',
  NOMBRE: 'Juan Pérez',
  EMAIL: 'juan@email.com',
  TELEFONO: '555-1111',
  ROLE: 'user'
}, {
  ID: 'ana',
  PASSWORD: 'anapass',
  NOMBRE: 'Ana López',
  EMAIL: 'ana@email.com',
  TELEFONO: '555-2222',
  ROLE: 'user'
}];

/***/ }),

/***/ 4435:
/*!****************************************!*\
  !*** ./src/app/pipes/group-by.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupByPipe: () => (/* binding */ GroupByPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
var _GroupByPipe;

class GroupByPipe {
  transform(collection, property, orderType = "asc") {
    if (!collection) {
      return [];
    }
    //console.log('collect', collection)
    let groupedCollection = collection.reduce((previous, current) => {
      previous[current[property]] = [...(previous[current[property]] || []), current];
      return previous;
    }, {});
    var objects = Object.keys(groupedCollection).map(header => ({
      header,
      details: groupedCollection[header]
    }));
    //console.log('objects',objects )
    let sortedCollection = objects.sort((a, b) => {
      if (isNaN(+a.header)) {
        // returns true if NaN, otherwise false
        return 0 - (a.header > b.header ? -1 : 1);
      } else {
        return 0 - (a > b ? -1 : 1);
      }
    });
    if (orderType == "desc" || orderType == "DESC" || orderType == "reverse") {
      sortedCollection.reverse();
    }
    //console.log('sorted',sortedCollection )
    return sortedCollection;
  }
}
_GroupByPipe = GroupByPipe;
_GroupByPipe.ɵfac = function GroupByPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GroupByPipe)();
};
_GroupByPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "groupBy",
  type: _GroupByPipe,
  pure: true
});

/***/ }),

/***/ 4836:
/*!****************************************!*\
  !*** ./src/app/pipes/order-by.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderByPipe: () => (/* binding */ OrderByPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
var _OrderByPipe;

class OrderByPipe {
  transform(collection, property, orderType) {
    if (!collection) {
      return [];
    }
    //console.log("collect", collection);
    let sortedCollection;
    if (orderType == "desc" || orderType == "DESC") {
      sortedCollection = collection.sort((a, b) => a[property] > b[property] ? -1 : 1);
    } else {
      sortedCollection = collection.sort((a, b) => a[property] < b[property] ? -1 : 1);
    }
    console.log("collect sorted", sortedCollection);
    return sortedCollection;
  }
}
_OrderByPipe = OrderByPipe;
_OrderByPipe.ɵfac = function OrderByPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OrderByPipe)();
};
_OrderByPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "orderBy",
  type: _OrderByPipe,
  pure: true
});

/***/ }),

/***/ 964:
/*!*****************************************!*\
  !*** ./src/app/service/base.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseService: () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7919);

var _BaseService;





class BaseService {
  // constructor(private _http: HttpClient) {}
  constructor() {
    // script sheet to json
    this.BASE_URL = "https://script.google.com/macros/s/AKfycbza19jUFnHpxywV7YrIpEPYDybxs7p2CGcdcp3b6euN1V7NyMNUU3cEUfKVUAvOFCrR/exec";
    this.TABLES = [];
    this._http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient);
  }
  // 'GASTOS_SPREAD_SHEET_ID'
  loadConfig(property) {
    var _this = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var config;
      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        config = yield _this._http.get('./assets/config.properties', {
          responseType: 'text'
        }).toPromise();
      } else {
        config = yield _this._http.get('./assets/config-dev.properties', {
          responseType: 'text'
        }).toPromise();
      }
      const properties = _this.parseProperties(config);
      _this.SPREAD_SHEET_ID = properties[property];
      if (_this.SPREAD_SHEET_ID) {
        return _this.SPREAD_SHEET_ID;
      }
      throw new Error("SPREAD_SHEET_ID is undefined");
    })();
  }
  updateConfig(newSpreadSheetId, property) {
    var _this2 = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var config;
      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        config = yield _this2._http.get('./assets/config.properties', {
          responseType: 'text'
        }).toPromise();
      } else {
        config = yield _this2._http.get('./assets/config-dev.properties', {
          responseType: 'text'
        }).toPromise();
      }
      let properties = _this2.parseProperties(config);
      properties[property] = newSpreadSheetId;
      const updatedConfig = _this2.stringifyProperties(properties);
      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        _this2.SPREAD_SHEET_ID = yield _this2._http.post('./assets/config.properties', {
          updatedConfig
        }, {
          responseType: 'text'
        }).toPromise();
      } else {
        _this2.SPREAD_SHEET_ID = yield _this2._http.post('./assets/config-dev.properties', {
          updatedConfig
        }, {
          responseType: 'text'
        }).toPromise();
      }
      _this2.SPREAD_SHEET_ID = newSpreadSheetId;
      if (_this2.SPREAD_SHEET_ID) {
        return _this2.SPREAD_SHEET_ID;
      }
      throw new Error("SPREAD_SHEET_ID is undefined");
    })();
  }
  parseProperties(properties) {
    return properties.split('\n').filter(line => line.trim() && line.includes('=')).reduce((acc, line) => {
      const [key, value] = line.split('=');
      acc[key.trim()] = (value !== null && value !== void 0 ? value : '').trim();
      return acc;
    }, {});
  }
  stringifyProperties(properties) {
    return Object.entries(properties).map(([key, value]) => `${key}=${value}`).join('\n');
  }
  setSpreadSheetId(id) {
    this.SPREAD_SHEET_ID = id;
  }
  /**
   *
   * @param table sheet name e.g. 'Casa'
   * @returns json of sheet
   */
  getEntities(table) {
    const url = this.BASE_URL + `?spreadsheetId=${this.SPREAD_SHEET_ID}&sheet=${table}`;
    // this.BASE_URL + `?sheetId=${this.SPREAD_SHEET_ID}&sheetName=${table}`;
    // console.log(url);
    return this._http.get(url, {
      responseType: "json"
    });
  }
  /**
   *
   * @param table sheet name e.g. 'Casa'
   * @returns json of sheet
   */
  getMaxId(table, id) {
    const url = this.BASE_URL + `?spreadsheetId=${this.SPREAD_SHEET_ID}&sheet=${table}&sheetMaxId=${id}`;
    // this.BASE_URL + `?sheetId=${this.SPREAD_SHEET_ID}&sheetName=${table}`;
    // console.log(url);
    return this._http.get(url, {
      responseType: "json"
    });
  }
  /**
   *
   * @param table sheet name e.g. 'Casa'
   * @param range range of sheet e.g. A1:Z100
   * @returns json of sheet
   */
  getEntitiesByRange(table, range) {
    const url =
    // this.BASE_URL + `?spreadsheetId=${this.SPREAD_SHEET_ID}&sheet=${table}`;
    this.BASE_URL + `?spreadsheetId=${this.SPREAD_SHEET_ID}&sheet=${table}&sheetRange=${range}`;
    // console.log(url);
    return this._http.get(url, {
      responseType: "json"
    });
  }
  saveEntities(table, rows) {
    // console.log(this.BASE_URL);
    let body = {};
    body.spreadsheet_id = this.SPREAD_SHEET_ID;
    body.sheet = table;
    body.rows = rows;
    // console.log(JSON.stringify(body));
    return this._http.post(this.BASE_URL, JSON.stringify(body));
  }
  saveEntitiesArray(bodytable) {
    // console.log(this.BASE_URL);
    let bodiesSaving = {};
    bodiesSaving.tables = [];
    bodytable.forEach(data => {
      var _bodiesSaving$tables;
      let body = {};
      body.spreadsheet_id = this.SPREAD_SHEET_ID;
      body.sheet = data.table;
      body.rows = data.rows;
      (_bodiesSaving$tables = bodiesSaving.tables) === null || _bodiesSaving$tables === void 0 || _bodiesSaving$tables.push(body);
    });
    console.debug(JSON.stringify(bodiesSaving));
    return this._http.post(this.BASE_URL, JSON.stringify(bodiesSaving));
  }
  sendEmail(_info, _Detail) {
    let bodySend = {};
    bodySend.sendEmail = true;
    bodySend.info = _info;
    bodySend.Detail = _Detail;
    console.debug(bodySend);
    return this._http.post(this.BASE_URL, JSON.stringify(bodySend));
  }
  /**
  * Función privada para manejar errores HTTP.
  * @param error El error HTTP.
  * @returns Observable<never> Un Observable que emite un error.
  */
  handleError(error) {
    let errorMessage = 'Error desconocido del cliente.';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente o de la red.
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // El backend devolvió un código de respuesta no exitoso.
      // El cuerpo de la respuesta puede contener pistas sobre lo que salió mal.
      errorMessage = `Código de error del servidor: ${error.status}, cuerpo: ${error.error}`;
    }
    console.error('Error en la petición HTTP:', errorMessage);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error(errorMessage));
  }
}
_BaseService = BaseService;
_BaseService.ɵfac = function BaseService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BaseService)();
};
_BaseService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _BaseService,
  factory: _BaseService.ɵfac
});

/***/ }),

/***/ 5176:
/*!*******************************************!*\
  !*** ./src/app/service/gastos.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GastosService: () => (/* binding */ GastosService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ 964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5074);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _mocks_mock_gastos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mocks/mock-gastos */ 8486);

var _GastosService;







class GastosService {
  constructor() {
    this.gastosDetalle$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    this.gastos$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    this.categorias$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    this.base = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService);
  }
  // constructor(private base: BaseService) {}
  getSpreadSheetId() {
    var _this = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.SPREAD_SHEET_ID = yield _this.base.loadConfig('GASTOS_SPREAD_SHEET_ID');
      // console.log('GastosService: SPREAD_SHEET_ID loaded : {}', this.SPREAD_SHEET_ID);
      return _this.SPREAD_SHEET_ID;
    })();
  }
  setSpreadSheetId(_spreadSheetId) {
    this.SPREAD_SHEET_ID = _spreadSheetId;
    this.base.updateConfig(this.SPREAD_SHEET_ID, 'GASTOS_SPREAD_SHEET_ID').then(property => {
      this.SPREAD_SHEET_ID = property;
      console.log('GastosService: SPREAD_SHEET_ID updated : {}', this.SPREAD_SHEET_ID);
    }).catch(error => console.error(error));
  }
  getCategoriaDef() {
    if (this.categorias$.getValue().length > 0) {
      // Si ya hay datos en categorias$, retorna el observable actual con delay
      return this.categorias$.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(500));
    }
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
      const mock = _mocks_mock_gastos__WEBPACK_IMPORTED_MODULE_3__.MOCK_CATEGORIAS;
      this.categorias$.next(mock);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(mock).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(500));
    }
    return this.base.getEntitiesByRange('Catalogos', 'A1:C50').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(data => {
      data = data.filter(item => item.Nombre);
      return data;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.base.handleError));
  }
  getFullDataDetail() {
    if (this.gastosDetalle$.getValue().length > 0) {
      // Si ya hay datos en gastosDetalle$, retorna el observable actual
      return this.gastosDetalle$.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(500));
    }
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
      const mock = _mocks_mock_gastos__WEBPACK_IMPORTED_MODULE_3__.MOCK_GASTOS_DETALLE;
      this.gastosDetalle$.next(mock);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(mock).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(500));
    }
    return this.base.getEntities('GastosDetalle').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(data => {
      return data;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.base.handleError));
  }
  save(_entity, _entities) {
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
      _mocks_mock_gastos__WEBPACK_IMPORTED_MODULE_3__.MOCK_GASTOS.push(_entity);
      if (Array.isArray(_entities)) {
        _entities.forEach(e => _mocks_mock_gastos__WEBPACK_IMPORTED_MODULE_3__.MOCK_GASTOS_DETALLE.push(e));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
        message: 'Guardado en mock local (desarrollo)'
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(500));
    }
    let gastoBodies = [];
    let gastoBody = {};
    //header
    gastoBody.table = 'Gastos';
    gastoBody.rows = this.getBody(_entity);
    gastoBodies.push(gastoBody);
    // Detail
    gastoBody = {};
    gastoBody.table = 'GastosDetalle';
    gastoBody.rows = this.getBodyDetrail(_entities);
    gastoBodies.push(gastoBody);
    //run service
    return this.base.saveEntitiesArray(gastoBodies);
  }
  getBody(_entity) {
    let body = [];
    let entities = [];
    entities.push(_entity.Categoria);
    entities.push(_entity.Nombre);
    entities.push(_entity.Fecha);
    entities.push('' + _entity.Monto);
    entities.push(_entity.Commentario);
    entities.push(new Date().toLocaleString('es-MX', {
      timeZone: 'America/Mexico_City'
    }));
    body.push(entities);
    return body;
  }
  getBodyDetrail(_entities) {
    let bodiesDetail = [];
    if (_entities) {
      // console.log("_entities Detail", _entities);
      _entities.forEach(data => {
        let entities = [];
        entities.push(data.Categoria);
        entities.push(data.Nombre);
        entities.push(data.Fecha);
        entities.push('' + data.Monto);
        entities.push(data.Commentario);
        entities.push(new Date().toLocaleString('es-MX', {
          timeZone: 'America/Mexico_City'
        }));
        bodiesDetail.push(entities);
      });
    }
    //console.log("_entities Detail return ", bodiesDetail);
    return bodiesDetail;
  }
}
_GastosService = GastosService;
_GastosService.ɵfac = function GastosService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GastosService)();
};
_GastosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: _GastosService,
  factory: _GastosService.ɵfac
});

/***/ }),

/***/ 7492:
/*!********************************************!*\
  !*** ./src/app/service/recibos.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecibosService: () => (/* binding */ RecibosService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ 964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5074);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _mocks_mock_recibos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mocks/mock-recibos */ 3280);
/* harmony import */ var _mocks_mock_catalogos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mocks/mock-catalogos */ 2018);
/* harmony import */ var _mocks_mock_recibos_detalle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mocks/mock-recibos-detalle */ 5030);
/* harmony import */ var _mocks_mock_conceptos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mocks/mock-conceptos */ 9133);

var _RecibosService;










class RecibosService {
  constructor() {
    this.base = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.inject)(_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService);
    // constructor(private base: BaseService) {}
    this.recibosDetalle$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    this.casas$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    this.conceptos$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
  }
  getSpreadSheetId() {
    var _this = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.SPREAD_SHEET_ID = yield _this.base.loadConfig('RECIBOS_SPREAD_SHEET_ID');
      // console.log('RecibosService: SPREAD_SHEET_ID loaded : ', this.SPREAD_SHEET_ID);
      return _this.SPREAD_SHEET_ID;
    })();
  }
  setSpreadSheetId(_spreadSheetId) {
    var _this2 = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.SPREAD_SHEET_ID = _spreadSheetId;
      _this2.SPREAD_SHEET_ID = yield _this2.base.updateConfig(_spreadSheetId, 'RECIBOS_SPREAD_SHEET_ID');
      // console.log('RecibosService: SPREAD_SHEET_ID updated : ', this.SPREAD_SHEET_ID);
      return _this2.SPREAD_SHEET_ID;
    })();
  }
  getFullData() {
    if (this.casas$.getValue().length > 0) {
      // Si ya hay datos en casas$, retorna el observable actual
      return this.casas$.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(500));
    }
    // Si no hay datos, invoca el método y setea casas$
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
      const mock = _mocks_mock_catalogos__WEBPACK_IMPORTED_MODULE_4__.MOCK_CATALOGOS;
      this.casas$.next(mock);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(mock).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(500));
    }
    return this.base.getEntitiesByRange('Catalogos', 'E1:I50').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(data => {
      data = data.filter(item => item.ID && item.NOMBRE);
      this.casas$.next(data || []);
      return data || [];
    }));
  }
  getFullDataDetail() {
    if (this.recibosDetalle$.getValue().length > 0) {
      // Si ya hay datos en casas$, retorna el observable actual
      return this.recibosDetalle$.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(500));
    }
    // Si no hay datos, invoca el método y setea casas$
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
      const mock = _mocks_mock_recibos_detalle__WEBPACK_IMPORTED_MODULE_5__.MOCK_RECIBOS_DETALLE;
      this.recibosDetalle$.next(mock);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_mocks_mock_recibos_detalle__WEBPACK_IMPORTED_MODULE_5__.MOCK_RECIBOS_DETALLE).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(1500));
    }
    return this.base.getEntities('RecibosDetalle').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(data => {
      return data || [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(this.base.handleError));
  }
  /*   getRecibos() {
      if (!environment.production) {
        return of(MOCK_RECIBOS).pipe(delay(500));
      }
      return this.base.getEntities('Recibos');
    } */
  getMaxFolio() {
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(_mocks_mock_recibos__WEBPACK_IMPORTED_MODULE_3__.MOCK_RECIBO_MAX_FOLIO).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(500));
    }
    return this.base.getMaxId('Recibos', 'FOLIO').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(data => {
      return data || {
        FOLIO: 1
      }; // Default to 1 if no data found
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(this.base.handleError));
  }
  getConceptos() {
    if (this.conceptos$ && this.conceptos$.getValue().length > 0) {
      // Si ya hay datos en conceptos$, retorna el observable actual con delay
      return this.conceptos$.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(500));
    }
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
      const mock = _mocks_mock_conceptos__WEBPACK_IMPORTED_MODULE_6__.MOCK_CONCEPTOS;
      this.conceptos$.next(mock);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(mock).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(500));
    }
    return this.base.getEntitiesByRange('Catalogos', 'A1:A50').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(data => {
      data = data.filter(item => item.NOMBRE);
      return data || [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(this.base.handleError));
  }
  save(_entity, _entities) {
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
      // Guardar temporalmente en el array dummy (solo en memoria, no persistente)
      _mocks_mock_recibos__WEBPACK_IMPORTED_MODULE_3__.MOCK_RECIBOS.push(_entity);
      if (Array.isArray(_entities)) {
        _entities.forEach(e => _mocks_mock_recibos_detalle__WEBPACK_IMPORTED_MODULE_5__.MOCK_RECIBOS_DETALLE.push(e));
      }
      // Simula un observable de éxito
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({
        message: 'Guardado en mock local (desarrollo)'
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(500));
    }
    let reciboBodies = [];
    let reciboBody = {};
    //header
    reciboBody.table = 'Recibos';
    reciboBody.rows = this.getBody(_entity);
    reciboBodies.push(reciboBody);
    // Detail
    reciboBody = {};
    reciboBody.table = 'RecibosDetalle';
    reciboBody.rows = this.getBodyDetrail(_entities);
    reciboBodies.push(reciboBody);
    //run service
    return this.base.saveEntitiesArray(reciboBodies);
  }
  getBody(_entity) {
    let body = [];
    let entities = [];
    entities.push('' + _entity.FOLIO);
    entities.push(_entity.CASA);
    entities.push(_entity.NOMBRE);
    entities.push(_entity.CANTIDAD);
    entities.push(_entity.CONCEPTO);
    entities.push(_entity.FECHA);
    entities.push(_entity.CORREO);
    entities.push(new Date().toLocaleString());
    body.push(entities);
    return body;
  }
  getBodyDetrail(_entities) {
    let bodiesDetail = [];
    if (_entities) {
      // console.log("_entities Detail", _entities);
      _entities.forEach(data => {
        let entities = [];
        entities.push('' + data.FOLIO);
        entities.push(data.CASA);
        entities.push(data.NOMBRE);
        entities.push(data.CONCEPTO);
        entities.push(data.MES);
        entities.push(data.MONTO);
        entities.push(new Date().toLocaleString());
        bodiesDetail.push(entities);
      });
    }
    //console.log("_entities Detail return ", bodiesDetail);
    return bodiesDetail;
  }
  sendEmail(info, Detail) {
    return this.base.sendEmail(info, Detail);
  }
}
_RecibosService = RecibosService;
_RecibosService.ɵfac = function RecibosService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecibosService)();
};
_RecibosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: _RecibosService,
  factory: _RecibosService.ɵfac
});

/***/ }),

/***/ 9679:
/*!*******************************************!*\
  !*** ./src/app/service/service.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceModule: () => (/* binding */ ServiceModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _recibos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recibos.service */ 7492);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ 964);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _gastos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gastos.service */ 5176);
var _ServiceModule;



 // Import the service





class ServiceModule {}
_ServiceModule = ServiceModule;
_ServiceModule.ɵfac = function ServiceModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ServiceModule)();
};
_ServiceModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _ServiceModule
});
_ServiceModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ErrorHandler,
    useClass: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ErrorHandler
  }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.provideHttpClient)(), _base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService, _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService, _recibos_service__WEBPACK_IMPORTED_MODULE_0__.RecibosService, _gastos_service__WEBPACK_IMPORTED_MODULE_3__.GastosService],
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ServiceModule, {
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]
  });
})();

/***/ }),

/***/ 4666:
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ 964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _mocks_mock_usuarios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mocks/mock-usuarios */ 1674);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 5312);

var _UserService;






class UserService {
  constructor() {
    this.base = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService);
  }
  getSpreadSheetId() {
    var _this = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.SPREAD_SHEET_ID = yield _this.base.loadConfig('CATALOGOS_SPREAD_SHEET_ID');
      return _this.SPREAD_SHEET_ID;
    })();
  }
  setSpreadSheetId(_spreadSheetId) {
    var _this2 = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.SPREAD_SHEET_ID = yield _this2.base.updateConfig(_spreadSheetId, 'CATALOGOS_SPREAD_SHEET_ID');
      return _this2.SPREAD_SHEET_ID;
    })();
  }
  getUsers(nombre, password) {
    if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
        let users = _mocks_mock_usuarios__WEBPACK_IMPORTED_MODULE_2__.MOCK_USUARIOS;
        let user = users.find(_user => _user.ID === nombre && _user.PASSWORD === password);
        if (user) {
          user.PASSWORD = '';
          user.TELEFONO = '';
          localStorage.setItem('user', JSON.stringify(user));
          observer.next(user.NOMBRE);
        } else {
          observer.next(null);
        }
        observer.complete();
      });
    }
    return this.base.getEntities("Usuarios").pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(data => {
      let users = data;
      let user = users.find(_user => _user.ID === nombre && _user.PASSWORD === password);
      if (user) {
        user.PASSWORD = '';
        user.TELEFONO = '';
        localStorage.setItem('user', JSON.stringify(user));
        return user.NOMBRE;
      }
      return null;
    }));
  }
}
_UserService = UserService;
_UserService.ɵfac = function UserService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserService)();
};
_UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _UserService,
  factory: _UserService.ɵfac
});

/***/ }),

/***/ 7568:
/*!**************************************!*\
  !*** ./src/app/utils/loadingUtil.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingUtil: () => (/* binding */ LoadingUtil)
/* harmony export */ });
/* harmony import */ var _home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);

var _LoadingUtil;


class LoadingUtil {
  constructor(loadingCtrl) {
    this.loadingCtrl = loadingCtrl;
  }
  showing() {
    var _this = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.loading && _this.loading.presented) {
        // Ya hay un loading activo, no crear otro
        return;
      }
      _this.loading = yield _this.loadingCtrl.create({
        message: "Por favor espere... "
      });
      yield _this.loading.present();
    })();
  }
  dismiss() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
    // this.loadingCtrl.dismiss();
  }
}
_LoadingUtil = LoadingUtil;
_LoadingUtil.ɵfac = function LoadingUtil_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoadingUtil)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController));
};
_LoadingUtil.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _LoadingUtil,
  factory: _LoadingUtil.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3511:
/*!************************************!*\
  !*** ./src/app/utils/toastUtil.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastUtil: () => (/* binding */ ToastUtil)
/* harmony export */ });
/* harmony import */ var _home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 1507);

var _ToastUtil;


class ToastUtil {
  constructor(toastController) {
    this.toastController = toastController;
  }
  presentToastColor(message, color) {
    var _this = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message,
        duration: 2000,
        color,
        position: 'bottom'
      });
      yield toast.present();
    })();
  }
  presentToast(_message, position) {
    var _this2 = this;
    return (0,_home_runner_work_recibos_pagos_recibos_pagos_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message: _message,
        duration: 3000,
        position: position
      });
      yield toast.present();
    })();
  }
}
_ToastUtil = ToastUtil;
_ToastUtil.ɵfac = function ToastUtil_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastUtil)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController));
};
_ToastUtil.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _ToastUtil,
  factory: _ToastUtil.ɵfac
});

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  baseHref: '/recibos-pagos/dev/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 8996:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		7518,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		1981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		1603,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		2273,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9642,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		2095,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		2335,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		7184,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8759,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4248,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		9863,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		1769,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		2569,
		"default-node_modules_ionic_core_dist_esm_data-ae11fd43_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		6534,
		"default-node_modules_ionic_core_dist_esm_data-ae11fd43_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		5458,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		654,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		6034,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input-password-toggle.entry.js": [
		5196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input-password-toggle_entry_js"
	],
	"./ion-input.entry.js": [
		761,
		"default-node_modules_ionic_core_dist_esm_input_utils-09c71bc7_js-node_modules_ionic_core_dist-8b8a84",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		6492,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		8353,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		1024,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		9160,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		393,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-option.entry.js": [
		8442,
		"node_modules_ionic_core_dist_esm_ion-picker-column-option_entry_js"
	],
	"./ion-picker-column.entry.js": [
		3110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column_entry_js"
	],
	"./ion-picker.entry.js": [
		5575,
		"node_modules_ionic_core_dist_esm_ion-picker_entry_js"
	],
	"./ion-popover.entry.js": [
		6772,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4810,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		4639,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		628,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		852,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1479,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4065,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7971,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		3184,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment-content.entry.js": [
		4312,
		"node_modules_ionic_core_dist_esm_ion-segment-content_entry_js"
	],
	"./ion-segment-view.entry.js": [
		4540,
		"node_modules_ionic_core_dist_esm_ion-segment-view_entry_js"
	],
	"./ion-segment_2.entry.js": [
		469,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select-modal.entry.js": [
		7101,
		"node_modules_ionic_core_dist_esm_ion-select-modal_entry_js"
	],
	"./ion-select_3.entry.js": [
		8471,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		388,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		2392,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		6059,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5427,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		198,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		1735,
		"default-node_modules_ionic_core_dist_esm_input_utils-09c71bc7_js-node_modules_ionic_core_dist-8b8a84",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		7510,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 8996;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 4140:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ strict namespace object ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 4140;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map