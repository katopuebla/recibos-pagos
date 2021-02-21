import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { MesComponent } from "./components/mes/mes.component";
import { MesDetailComponent } from "./components/mes/mes.component";
import { MesesComponent } from "./components/meses/meses.component";
import { MesesDetailComponent } from "./components/meses/meses.component";
import { GastosComponent } from "../pages/gastos/gastos.component";
import { FolioComponent } from "./components/folio/folio.component";
import { CasasComponent } from "./components/casas/casas.component";
import { CasasDetailComponent } from "./components/casas/casas.component";

import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { BaseService } from "./service/base.service";
import { UserService } from "./service/user.service";
import { HttpClientModule } from "@angular/common/http";
import { RecibosService } from "./service/recibos.service";
import { GroupByPipePipe } from "./utils/group-by-pipe.pipe";
import { OrderByPipePipe } from "./utils/order-by.pipe";
import { GastosService } from "./service/gastos.service";
import { RecibosPage } from "../pages/recibos/recibos.page";
import { AddRecibosComponent } from "./components/add-recibos/add-recibos.component";
import { AddGastosComponent } from "./components/add-gastos/add-gastos.component";

import { Clipboard } from "@ionic-native/clipboard";

@NgModule({
  declarations: [
    MyApp,
    MesComponent,
    MesDetailComponent,
    MesesComponent,
    MesesDetailComponent,
    ContactPage,
    HomePage,
    CasasComponent,
    CasasDetailComponent,
    TabsPage,
    RecibosPage,
    GroupByPipePipe,
    OrderByPipePipe,
    GastosComponent,
    FolioComponent,
    AddRecibosComponent,
    AddGastosComponent
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  //exports: [ ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    CasasComponent,
    CasasDetailComponent,
    TabsPage,
    RecibosPage,
    GastosComponent,
    FolioComponent,
    MesComponent,
    MesDetailComponent,
    MesesComponent,
    MesesDetailComponent,
    AddRecibosComponent,
    AddGastosComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BaseService,
    UserService,
    RecibosService,
    GastosService
  ]
})
export class AppModule {}
