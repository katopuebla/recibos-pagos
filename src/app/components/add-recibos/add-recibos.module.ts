import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddRecibosComponent } from './add-recibos.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [AddRecibosComponent],
  exports: [AddRecibosComponent]
})
export class AddRecibosComponentModule {}
