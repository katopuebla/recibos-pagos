import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddGastosComponent } from './add-gastos.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [AddGastosComponent],
  exports: [AddGastosComponent]
})
export class AddGastosComponentModule {}
