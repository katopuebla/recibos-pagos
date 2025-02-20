import { IonicModule } from '@ionic/angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibosService } from './recibos.service'; // Import the service
import { BaseService } from './base.service';
import { UserService } from './user.service';
import { provideHttpClient } from '@angular/common/http';
import { GastosService } from './gastos.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  declarations: [],
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandler },
    provideHttpClient(),
    BaseService,
    UserService,
    RecibosService,
    GastosService
  ] 
})
export class ServiceModule {}
