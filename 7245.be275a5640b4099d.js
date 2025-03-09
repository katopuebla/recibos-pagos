"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7245],{7245:(_,f,c)=>{c.r(f),c.d(f,{HomePageModule:()=>j});var n=c(4742),m=c(177),i=c(4341),e=c(4438);let b=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[m.MD,i.YN,n.bv,i.X1]}),s})();var d=c(9522),u=c(467),h=c(4885),g=c(7492),v=c(5176);let C=(()=>{var t;class s{constructor(o,a,l,p){this.fb=o,this.modalCtrl=a,this.recibosService=l,this.gastosservice=p,this.parameters=this.fb.group({sheetIdRecibos:[""],sheetIdGastos:[""]})}ngOnInit(){this.recibosService.getSpreadSheetId().then(o=>this.parameters.patchValue({sheetIdRecibos:o})),this.gastosservice.getSpreadSheetId().then(o=>this.parameters.patchValue({sheetIdGastos:o}))}onSave(o){console.log(this.parameters.value),this.recibosService.setSpreadSheetId(o.sheetIdRecibos).then(()=>this.modalCtrl.dismiss(this.parameters.value))}dismiss(){this.modalCtrl.dismiss()}}return(t=s).\u0275fac=function(o){return new(o||t)(e.rXU(i.ok),e.rXU(n.W3),e.rXU(g.f),e.rXU(v.j))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-parameters"]],standalone:!1,decls:15,vars:2,consts:[[3,"translucent"],["slot","start"],[3,"click"],["name","close"],[1,"ion-padding"],[3,"ngSubmit","formGroup"],["type","text","label","SheetId Recibos","formControlName","sheetIdRecibos"],["type","text","label","SheetId Gastos","formControlName","sheetIdGastos"],["type","submit","expand","block"]],template:function(o,a){1&o&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Parameters"),e.k0s(),e.j41(4,"ion-buttons",1)(5,"ion-button",2),e.bIt("click",function(){return a.dismiss()}),e.nrm(6,"ion-icon",3),e.k0s()()()(),e.j41(7,"ion-content",4)(8,"form",5),e.bIt("ngSubmit",function(){return a.onSave(a.parameters.value)}),e.j41(9,"ion-item"),e.nrm(10,"ion-input",6),e.k0s(),e.j41(11,"ion-item"),e.nrm(12,"ion-input",7),e.k0s(),e.j41(13,"ion-button",8),e.EFF(14,"Save"),e.k0s()()()),2&o&&(e.Y8G("translucent",!0),e.R7$(8),e.Y8G("formGroup",a.parameters))},dependencies:[n.Jm,n.QW,n.W9,n.eU,n.iq,n.$w,n.uz,n.BC,n.ai,n.Gw,i.qT,i.BC,i.cb,i.j4,i.JD],encapsulation:2}),s})();function P(t,s){if(1&t){const r=e.RV6();e.j41(0,"ion-fab-button",7),e.bIt("click",function(){e.eBV(r);const a=e.XpG();return e.Njj(a.openParameter())}),e.nrm(1,"ion-icon",10),e.k0s()}}function I(t,s){if(1&t){const r=e.RV6();e.j41(0,"ion-fab",11)(1,"ion-fab-button",12),e.bIt("click",function(){e.eBV(r);const a=e.XpG();return e.Njj(a.openModal())}),e.nrm(2,"ion-icon",13),e.k0s()()}}const y=[{path:"",component:(()=>{var t;class s{constructor(o,a,l){this.router=o,this.modalCtrl=a,this.actionSheet=l,this.role=""}ngOnInit(){const o=localStorage.getItem("user");this.role=o?JSON.parse(o).ROLE:""}openModal(){var o=this;return(0,u.A)(function*(){const a=yield o.modalCtrl.create({component:h.c});a.present(),yield a.onWillDismiss()})()}openParameter(){var o=this;return(0,u.A)(function*(){const a=yield o.modalCtrl.create({component:C});a.present(),yield a.onWillDismiss()})()}presentActionSheet(){var o=this;return(0,u.A)(function*(){yield(yield o.actionSheet.create({header:"Opciones",cssClass:"my-custom-class",buttons:[{text:"Cerrar sesi\xf3n",role:"destructive",icon:"log-out",handler:()=>{localStorage.removeItem("user"),o.router.navigate(["/login"])}},{text:"Cancelar",icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]})).present()})()}}return(t=s).\u0275fac=function(o){return new(o||t)(e.rXU(d.Ix),e.rXU(n.W3),e.rXU(n.GD))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-home"]],standalone:!1,decls:17,vars:4,consts:[[3,"translucent"],["color","primary"],[1,"ion-padding"],["slot","fixed","vertical","top","horizontal","end",3,"edge"],["name","chevron-down-circle"],["side","bottom"],[3,"click",4,"ngIf"],[3,"click"],["name","log-out"],["slot","fixed","horizontal","end","vertical","bottom",4,"ngIf"],["name","cog"],["slot","fixed","horizontal","end","vertical","bottom"],["ion-fab","",3,"click"],["name","add"]],template:function(o,a){1&o&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),e.EFF(3," Recibos "),e.k0s()()(),e.j41(4,"ion-content",2)(5,"ion-fab",3)(6,"ion-fab-button"),e.nrm(7,"ion-icon",4),e.k0s(),e.j41(8,"ion-fab-list",5),e.DNE(9,P,2,0,"ion-fab-button",6),e.j41(10,"ion-fab-button",7),e.bIt("click",function(){return a.presentActionSheet()}),e.nrm(11,"ion-icon",8),e.k0s()()(),e.DNE(12,I,3,0,"ion-fab",9),e.j41(13,"h2"),e.EFF(14,"Recibos de Pagos y Gastos"),e.k0s(),e.j41(15,"p"),e.EFF(16," Manejo de recibos de pagos y gastos generales "),e.k0s()()),2&o&&(e.Y8G("translucent",!0),e.R7$(5),e.Y8G("edge",!0),e.R7$(4),e.Y8G("ngIf","admin"===a.role),e.R7$(3),e.Y8G("ngIf","reader"!=a.role))},dependencies:[n.W9,n.Q8,n.YW,n.OL,n.eU,n.iq,n.BC,n.ai,m.bT],encapsulation:2}),s})()}];let G=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[d.iI.forChild(y),d.iI]}),s})(),S=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[m.MD,i.YN,n.bv,i.X1]}),s})(),j=(()=>{var t;class s{}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[n.bv,m.MD,i.YN,i.X1,b,S,G]}),s})()}}]);