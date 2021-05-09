import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from '../contact';

@NgModule({
  imports: [CommonModule, IonicPageModule.forChild(ContactPage)],
  exports: [ContactPage],
  declarations: []
})
export class ContactModule {}
