"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_gastos_gastos_module_ts"],{

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _gastos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gastos.page */ 2501);
/* harmony import */ var _gastos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gastos-routing.module */ 2995);
/* harmony import */ var src_app_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/group-by.pipe */ 4435);
/* harmony import */ var src_app_components_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/user-avatar/user-avatar.component */ 5441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
var _GastosPageModule;








class GastosPageModule {}
_GastosPageModule = GastosPageModule;
_GastosPageModule.ɵfac = function GastosPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GastosPageModule)();
};
_GastosPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: _GastosPageModule
});
_GastosPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _gastos_routing_module__WEBPACK_IMPORTED_MODULE_1__.GastosPageRoutingModule, src_app_components_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_3__.UserAvatarComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GastosPageModule, {
    declarations: [_gastos_page__WEBPACK_IMPORTED_MODULE_0__.GastosPage],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _gastos_routing_module__WEBPACK_IMPORTED_MODULE_1__.GastosPageRoutingModule, src_app_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_2__.GroupByPipe, src_app_components_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_3__.UserAvatarComponent]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _service_gastos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/gastos.service */ 5176);
/* harmony import */ var _utils_loadingUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/loadingUtil */ 7568);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _components_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/user-avatar/user-avatar.component */ 5441);
/* harmony import */ var _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/group-by.pipe */ 4435);

var _GastosPage;








function GastosPage_ion_fab_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-fab", 10)(1, "ion-fab-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GastosPage_ion_fab_7_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openModal({
        new: "Add"
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function GastosPage_ion_item_group_12_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "div", 14)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const detail_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", detail_r3.Nombre, " ", detail_r3.Comentario ? " (" + detail_r3.Comentario + ") " : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", detail_r3.Categoria, " -- ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 4, detail_r3.Monto), " ");
  }
}
function GastosPage_ion_item_group_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item-group")(1, "ion-item-divider", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, GastosPage_ion_item_group_12_ion_item_4_Template, 8, 6, "ion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 2, item_r4.header, "MMM.dd.yy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r4.details);
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
      _this.loadUtil.showing();
      yield _this.service.getFullDataDetail().subscribe(data => {
        _this.items = [...data]; // Fuerza nueva referencia para refrescar la vista
        _this.itemsBackup = [..._this.items];
        _this.loadUtil.dismiss();
      });
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
  return new (__ngFactoryType__ || _GastosPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_gastos_service__WEBPACK_IMPORTED_MODULE_2__.GastosService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_utils_loadingUtil__WEBPACK_IMPORTED_MODULE_3__.LoadingUtil));
};
_GastosPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _GastosPage,
  selectors: [["app-gastos"]],
  standalone: false,
  decls: 14,
  vars: 7,
  consts: [[3, "translucent"], ["color", "primary"], ["slot", "end"], ["id", "user-avatar", "size", "medium"], [1, "ion-padding"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end", 4, "ngIf"], ["id", "gastos-searchbar", 3, "ionInput"], ["slot", "fixed", 3, "ionRefresh"], ["pullingIcon", "arrow-dropdown", "pullingText", "Pull to refresh", "refreshingSpinner", "circles", "refreshingText", "Refrescando..."], [4, "ngFor", "ngForOf"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end"], ["id", "add-gasto-fab-button", 3, "click"], ["name", "add"], ["color", "light"], ["ion-text", "", "color", "primary"]],
  template: function GastosPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Gastos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-user-avatar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, GastosPage_ion_fab_7_Template, 3, 0, "ion-fab", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "ion-list-header")(9, "ion-searchbar", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionInput", function GastosPage_Template_ion_searchbar_ionInput_9_listener($event) {
        return ctx.getItems($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ion-refresher", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionRefresh", function GastosPage_Template_ion_refresher_ionRefresh_10_listener($event) {
        return ctx.doRefresh($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "ion-refresher-content", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, GastosPage_ion_item_group_12_Template, 5, 5, "ion-item-group", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "groupBy");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.role != "reader");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](13, 3, ctx.items, "Fecha", "reverse"));
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _components_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_4__.UserAvatarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_5__.GroupByPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gastos_gastos_module_ts.3fb616180541540d.js.map