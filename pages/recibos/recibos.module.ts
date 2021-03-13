import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecibosPage } from "./recibos.page";
import {
  MesComponent,
  MesDetailComponent
} from "./components/mes/mes.component";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [RecibosPage, MesComponent, MesDetailComponent],
  entryComponents: [],
  imports: [CommonModule, IonicPageModule.forChild(RecibosPage)],
  exports: [RecibosPage]
})
export class RecibosModule {}
