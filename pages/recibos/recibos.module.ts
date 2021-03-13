import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecibosPage } from "./recibos.page";
import { MesComponent } from "./components/mes/mes.component";

@NgModule({
  declarations: [RecibosPage, MesComponent],
  entryComponents: [],
  imports: [CommonModule, IonicPageModule.forChild(RecibosPage)],
  exports: [RecibosPage]
})
export class RecibosModule {}
