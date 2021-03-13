import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "../../pages/home/home";
import { TabsPage } from "./tabs";

const ROUTERS: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    childen: [
      {
        path: "home",
        component: HomePage
      },
      {
        path: "recibos",
        loadChilen: () =>
          import("../recibos/recibos.module").then(m => m.RecibosModule)
      }
    ]
  },
  {
    path: "**",
    redirectTo: "home"
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTERS)],
  declarations: []
})
export class RoutingRecibosModule {}
