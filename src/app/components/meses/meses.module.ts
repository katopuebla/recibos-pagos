import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MesesComponent, MesesDetailComponent } from './meses.component';
import { GroupByPipe } from 'src/app/pipes/group-by.pipe';

@NgModule({
  imports: [ 
    IonicModule, 
    CommonModule,
     FormsModule, 
     ReactiveFormsModule,
    GroupByPipe],
  declarations: [MesesComponent, MesesDetailComponent],
  exports: [MesesComponent, MesesDetailComponent]
})
export class MesesComponentModule {}
