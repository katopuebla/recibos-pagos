import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabsPage } from "../tabs";
import { HomePage } from "../home/home";

@NgModule({
  declarations: [TabsPage, HomePage],
  imports: [CommonModule, IonicPageModule.forChild(TabsPage)],
  exports: [TabsPage]
})
export class TabsModule {}
