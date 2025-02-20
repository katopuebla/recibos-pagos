import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './service/service.module';
import { ToastUtil } from './utils/toastUtil';
import { LoadingUtil } from './utils/loadingUtil';
import { GroupByPipe } from './pipes/group-by.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ServiceModule,
    GroupByPipe,
    OrderByPipe
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ToastUtil, LoadingUtil],
  bootstrap: [AppComponent],
})
export class AppModule {}
