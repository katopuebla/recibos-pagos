import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { AddRecibosComponentModule } from '../../components/add-recibos/add-recibos.module';

import { HomePageRoutingModule } from './home-routing.module';
import { AddGastosComponentModule } from 'src/app/components/add-gastos/add-gastos.module';
import { ParametersComponent } from 'src/app/components/parameters/parameters.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddRecibosComponentModule,
    AddGastosComponentModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ParametersComponent]
})
export class HomePageModule {}
