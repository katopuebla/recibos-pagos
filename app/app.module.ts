import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';

import { MesComponent } from './components/mes/mes.component';
import { MesesComponent } from './components/meses/meses.component';
import { MesesDetailComponent } from './components/meses/meses.component';
import { GastosComponent } from '../pages/gastos/gastos.component';
import { FolioComponent } from './components/folio/folio.component';
import { CasasComponent } from './components/casas/casas.component';
import { CasasDetailComponent } from './components/casas/casas.component';

import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { BaseService } from './service/base.service';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { RecibosService } from './service/recibos.service';
import { GroupByPipePipe } from './utils/group-by-pipe.pipe';
import { OrderByPipePipe } from './utils/order-by.pipe';
import { GastosService } from './service/gastos.service';
import { AddRecibosComponent } from './components/add-recibos/add-recibos.component';
import { AddGastosComponent } from './components/add-gastos/add-gastos.component';

//import { Clipboard } from "@ionic-native/clipboard";
import { HomePage } from '../pages/home/home';
//import { AboutComponent } from '../pages/about/about.component';
import { RecibosPage } from '../pages/recibos/recibos.page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MesComponent,
    MesesComponent,
    MesesDetailComponent,
    ContactPage,
    CasasComponent,
    CasasDetailComponent,
    TabsPage,
    RecibosPage,
    GroupByPipePipe,
    OrderByPipePipe,
    GastosComponent,
    FolioComponent,
    AddRecibosComponent,
    AddGastosComponent,
   // AboutComponent
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  exports: [],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    CasasComponent,
    CasasDetailComponent,
    TabsPage,
    RecibosPage,
    GastosComponent,
    FolioComponent,
    MesComponent,
    MesesComponent,
    MesesDetailComponent,
    AddRecibosComponent,
    AddGastosComponent,
  //  AboutComponent
  ],
  providers: [
  // StatusBar,
    //SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BaseService,
    UserService,
    RecibosService,
    GastosService
  ]
})
export class AppModule {}
