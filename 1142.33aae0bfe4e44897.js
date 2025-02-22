"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1142],{1142:(P,h,m)=>{m.r(h),m.d(h,{GastosPageModule:()=>D});var i=m(4742),p=m(177),c=m(4341),u=m(9522),C=m(467),g=m(7568),t=m(4438),f=m(5176),b=m(3511);function v(n,r){if(1&n&&(t.j41(0,"ion-select-option",16),t.EFF(1),t.k0s()),2&n){const a=r.$implicit;t.Y8G("value",a),t.R7$(),t.SpI("",a.Nombre," ")}}function G(n,r){if(1&n){const a=t.RV6();t.j41(0,"span",23),t.bIt("click",function(){t.eBV(a);const e=t.XpG().index,s=t.XpG();return t.Njj(s.removeInputField(e))}),t.nrm(1,"ion-icon",2),t.EFF(2," eliminar "),t.k0s()}}function F(n,r){if(1&n&&(t.j41(0,"section",17)(1,"ion-item-group")(2,"ion-item-divider",18),t.EFF(3),t.k0s(),t.j41(4,"ion-item")(5,"ion-label",19),t.EFF(6,"Mes:"),t.k0s(),t.nrm(7,"ion-datetime",20),t.k0s(),t.j41(8,"ion-item"),t.nrm(9,"ion-input",21),t.k0s(),t.DNE(10,G,3,0,"span",22),t.k0s()()),2&n){const a=r.index,o=t.XpG();t.Y8G("formGroupName",a),t.R7$(3),t.SpI("Conceptos #",a+1,""),t.R7$(4),t.Y8G("preferWheel",!0),t.R7$(3),t.Y8G("ngIf",o.conceptoForm.length>1)}}let k=(()=>{var n;class r extends g.L{constructor(o,e,s,l,d){super(l),this.modalCtrl=o,this.formBuilder=e,this.service=s,this.toastCtrl=d,this.gasto={},this.gastoDetalle={},this.gastoDetalles=[],this.conceptos=[],this.categorias=[],this.date=new Date,this.today=new Date(this.date.getTime()-6e4*this.date.getTimezoneOffset()),this.fields=this.formBuilder.group({categoria:["",c.k0.required],nombre:["",c.k0.required],fecha:["",c.k0.required],monto:["",c.k0.required],comentario:[""],conceptos:this.formBuilder.array([this.frmConceptos()])})}frmConceptos(){return this.formBuilder.group({mes:["",c.k0.required],monto:["",c.k0.required]})}get conceptoForm(){return this.fields.get("conceptos")}logForm(){console.log(this.fields.value)}ngOnInit(){this.service.getSpreadSheetId().then(()=>this.initCategorias());const o=this.today.toJSON().split("T")[0];this.fields.patchValue({fecha:o}),this.showLoading()}initCategorias(){this.service.getCategoriaDef().subscribe(o=>{this.categorias=o||[],this.loadingDismiss()})}onChange(o){const e=o.detail.value;if(e){let s;s=this.categorias&&this.categorias.find(l=>l.Nombre===e.Nombre)||{},this.fields.patchValue({nombre:s.PersonaServicio})}}onChangeMonto(o,e){const s=o.detail.value;if(s){const l=this.fields.controls.conceptos,T=(l.at(e),this.today.toJSON().split("T")[0]);l.at(e).patchValue({mes:T,monto:s})}}onSave(o){let e=new Date(this.gasto.Fecha||this.today);this.gasto.Fecha=e.toLocaleString("es-MX",{timeZone:"America/Mexico_City"}),this.fillEvent(o),this.service.save(this.gasto,this.gastoDetalles).subscribe({next:s=>{this.meesageToast("Se guardo exitosamente"),this.loadingDismiss(),this.dismiss()},error:s=>{this.meesageToast("No se pudo guardar el dato"),console.log("Error: ",s),this.loadingDismiss()}}),this.showLoading()}fillEvent(o){this.gasto.Categoria=o.categoria.Nombre,new Date(o.fecha),this.gasto.Fecha=o.fecha,this.gasto.Nombre=o.nombre,this.gasto.Monto=o.monto,this.gasto.Commentario=o.comentario;var s=o.conceptos;this.gastoDetalles=[],s&&s.forEach(l=>{var d={};d.Categoria=o.categoria.Nombre,d.Fecha=l.mes,d.Nombre=o.nombre,d.Monto=l.monto,d.Commentario=o.comentario,this.gastoDetalles.push(d)})}removeInputField(o){this.fields.controls.conceptos.removeAt(o)}addNewInputField(){const o=this.fields.controls.conceptos;let e=0;o.controls.forEach(s=>{e+=s.value.monto}),o.push(this.frmConceptos()),this.updateConcepto(e)}updateConcepto(o=0){const s=this.fields.value.monto-o,l=this.fields.controls.conceptos,d=this.today.toJSON().split("T")[0];l.at(l.length-1).patchValue({mes:d,monto:s})}meesageToast(o){this.toastCtrl.presentToast(o,"top")}dismiss(){this.modalCtrl.dismiss()}}return(n=r).\u0275fac=function(o){return new(o||n)(t.rXU(i.W3),t.rXU(c.ok),t.rXU(f.j),t.rXU(i.Xi),t.rXU(b.w))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-add-gastos"]],standalone:!1,features:[t.Vt3],decls:27,vars:4,consts:[["slot","start"],["ion-button","",3,"click"],["name","close"],[1,"ion-padding"],[3,"ngSubmit","formGroup"],["label","Categoria","labelPlacement","floating","interface","popover","formControlName","categoria","placeholder","Seleciona categoria",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],["label","Concepto","labelPlacement","floating","type","text","formControlName","nombre","placeholder","Nombre o Concepto"],["label","Fecha","labelPlacement","floating","id","fecha","type","date","formControlName","fecha"],["label","Monto","labelPlacement","floating","type","number","formControlName","monto",3,"ionChange"],["label","Comentario","labelPlacement","floating","formControlName","comentario","placeholder","comentario"],["formArrayName","conceptos","margin-bottom",""],[3,"formGroupName",4,"ngFor","ngForOf"],["ion-button","","float-left","","icon-left","","clear","",3,"click"],["name","add"],["type","submit",3,"disabled"],[3,"value"],[3,"formGroupName"],["color","light"],["floating",""],["id","mes","displayFormat","MMM. YYYY","formControlName","mes","monthShortNames","Ene, Feb, Mar, Apr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic","presentation","month-year",3,"preferWheel"],["label","Monto:","labelPlacement","floating","id","monto","type","number","maxlength","50","formControlName","monto"],["float-right","","ion-button","","icon-left","","clear","",3,"click",4,"ngIf"],["float-right","","ion-button","","icon-left","","clear","",3,"click"]],template:function(o,e){1&o&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t.EFF(3,"Agregar Gastos"),t.k0s(),t.j41(4,"ion-buttons",0)(5,"ion-button",1),t.bIt("click",function(){return e.dismiss()}),t.nrm(6,"ion-icon",2),t.k0s()()()(),t.j41(7,"ion-content",3)(8,"form",4),t.bIt("ngSubmit",function(){return e.onSave(e.fields.value)}),t.j41(9,"ion-item")(10,"ion-select",5),t.bIt("ionChange",function(l){return e.onChange(l)}),t.DNE(11,v,2,2,"ion-select-option",6),t.k0s()(),t.j41(12,"ion-item"),t.nrm(13,"ion-input",7),t.k0s(),t.j41(14,"ion-item"),t.nrm(15,"ion-input",8),t.k0s(),t.j41(16,"ion-item")(17,"ion-input",9),t.bIt("ionChange",function(l){return e.onChangeMonto(l,0)}),t.k0s()(),t.j41(18,"ion-item"),t.nrm(19,"ion-textarea",10),t.k0s(),t.j41(20,"div",11),t.DNE(21,F,11,4,"section",12),t.k0s(),t.j41(22,"span",13),t.bIt("click",function(){return e.addNewInputField()}),t.nrm(23,"ion-icon",14),t.EFF(24," nuevo concepto "),t.k0s(),t.j41(25,"ion-button",15),t.EFF(26,"Agregar"),t.k0s()()()),2&o&&(t.R7$(8),t.Y8G("formGroup",e.fields),t.R7$(3),t.Y8G("ngForOf",e.categorias),t.R7$(10),t.Y8G("ngForOf",e.conceptoForm.controls),t.R7$(4),t.Y8G("disabled",!e.fields.valid))},dependencies:[p.Sq,p.bT,c.qT,c.BC,c.cb,c.tU,i.Jm,i.QW,i.W9,i.A9,i.eU,i.iq,i.$w,i.uz,i.Dg,i.jh,i.he,i.Nm,i.Ip,i.nc,i.BC,i.ai,i.su,i.Je,i.Gw,c.j4,c.JD,c.$R,c.v8],encapsulation:2}),r})();var N=m(3656),_=m(4435);function M(n,r){if(1&n&&(t.j41(0,"ion-item")(1,"ion-label")(2,"div",7)(3,"h3"),t.EFF(4),t.k0s()(),t.j41(5,"p"),t.EFF(6),t.nI1(7,"currency"),t.k0s()()()),2&n){const a=r.$implicit;t.R7$(4),t.JRh(a.Nombre),t.R7$(2),t.Lme("",a.Categoria," -- ",t.bMT(7,3,a.Monto)," ")}}function y(n,r){if(1&n&&(t.j41(0,"ion-item-group")(1,"ion-item-divider",6),t.EFF(2),t.nI1(3,"date"),t.k0s(),t.DNE(4,M,8,5,"ion-item",5),t.k0s()),2&n){const a=r.$implicit;t.R7$(2),t.SpI(" ",t.i5U(3,2,a.header,"MMM.dd.yy")," "),t.R7$(2),t.Y8G("ngForOf",a.details)}}const I=[{path:"",component:(()=>{var n;class r{constructor(o,e,s,l){this.modalCtrl=o,this.navCtrl=e,this.service=s,this.loadUtil=l,this.items=[],this.itemsBackup=[]}ngOnInit(){this.service.getSpreadSheetId().then(()=>this.getdata())}getdata(){this.service.getFullDataDetail().subscribe(o=>{this.items=o,this.itemsBackup=this.items,this.loadUtil.loadingDismiss()}),this.loadUtil.showLoading()}getItems(o){console.log(this.items),this.items=this.itemsBackup;const e=o.target.value;e&&""!=e.trim()&&(this.items=this.items.filter(s=>s.Categoria&&s.Categoria.toLowerCase().indexOf(e.toLowerCase())>-1||s.Nombre&&s.Nombre.toLowerCase().indexOf(e.toLowerCase())>-1))}openModal(o){var e=this;return(0,C.A)(function*(){(yield e.modalCtrl.create({component:k,componentProps:{detail:o.detail}})).present()})()}}return(n=r).\u0275fac=function(o){return new(o||n)(t.rXU(i.W3),t.rXU(N.q9),t.rXU(f.j),t.rXU(g.L))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-gastos"]],standalone:!1,decls:12,vars:6,consts:[[3,"translucent"],["slot","fixed","vertical","bottom","horizontal","end"],[3,"click"],["name","add"],[3,"ionInput"],[4,"ngFor","ngForOf"],["color","light"],["ion-text","","color","primary"]],template:function(o,e){1&o&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.EFF(3," Gastos "),t.k0s()()(),t.j41(4,"ion-content")(5,"ion-fab",1)(6,"ion-fab-button",2),t.bIt("click",function(){return e.openModal({new:"Add"})}),t.nrm(7,"ion-icon",3),t.k0s()(),t.j41(8,"ion-list-header")(9,"ion-searchbar",4),t.bIt("ionInput",function(l){return e.getItems(l)}),t.k0s()(),t.DNE(10,y,5,5,"ion-item-group",5),t.nI1(11,"groupBy"),t.k0s()),2&o&&(t.Y8G("translucent",!0),t.R7$(10),t.Y8G("ngForOf",t.brH(11,2,e.items,"Fecha","reverse")))},dependencies:[i.W9,i.Q8,i.YW,i.eU,i.iq,i.uz,i.Dg,i.jh,i.he,i.AF,i.S1,i.BC,i.ai,i.Gw,p.Sq,p.oe,p.vh,_.l],encapsulation:2}),r})()}];let j=(()=>{var n;class r{}return(n=r).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[u.iI.forChild(I),u.iI]}),r})(),D=(()=>{var n;class r{}return(n=r).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[i.bv,p.MD,c.YN,j]}),r})()}}]);