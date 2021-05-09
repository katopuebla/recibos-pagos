import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';
import { GastosComponent } from './gastos.component';

@NgModule({
  imports: [
    // CommonModule
    IonicPageModule.forChild(GastosComponent)
  ],
  exports: [GastosComponent],
  declarations: [GastosComponent]
})
export class GastosModule {}
