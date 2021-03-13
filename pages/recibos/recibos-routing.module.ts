import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { RecibosPage } from "../recibos.page";
import { MesComponent } from "./mes/mes.component";

const ROUTERS: Routes = [
  {
    path: "",
    component: RecibosPage
  },
  {
    path: "mes",
    component: MesComponent
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTERS)],
  declarations: []
})
export class RoutingRecibosModule {}
