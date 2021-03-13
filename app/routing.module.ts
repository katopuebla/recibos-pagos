import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const ROUTERS: Routes = [
  {
    path: "",
    loadChilden: () =>
      import("./pages/tabs/tabs.module").then(m => m.TabsModule)
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(ROUTERS)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
