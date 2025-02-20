import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecibosPage } from './recibos.page';

const routes: Routes = [
  {
    path: '',
    component: RecibosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecibosPageRoutingModule {}
