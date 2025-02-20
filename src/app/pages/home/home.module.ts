import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { AddRecibosComponentModule } from '../../components/add-recibos/add-recibos.module';

import { HomePageRoutingModule } from './home-routing.module';
import { AddGastosComponentModule } from 'src/app/components/add-gastos/add-gastos.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AddRecibosComponentModule,
    AddGastosComponentModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
