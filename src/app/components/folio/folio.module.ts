import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { FolioComponent } from './folio.component';
import { GroupByPipe } from 'src/app/pipes/group-by.pipe';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule, GroupByPipe],
  declarations: [FolioComponent],
  exports: [FolioComponent]
})
export class FolioComponentModule {}
