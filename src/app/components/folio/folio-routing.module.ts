import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolioComponent } from './folio.component';

const routes: Routes = [
  {
    path: '',
    component: FolioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FolioComponentRoutingModule {}
