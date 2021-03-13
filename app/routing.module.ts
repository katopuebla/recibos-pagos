import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "../../pages/home/home";

const ROUTERS: Routes = [
  {
    path: '', component: HomePage,
  }
];
@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class RoutingModule {}
