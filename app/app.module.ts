import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { MesPage } from "../pages/mes/mes";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { CasasPage } from "../pages/casas/casas";
import { TabsPage } from "../pages/tabs/tabs";
import { BaseService } from "./service/base.service";
import { UserService } from "./service/user.service";
import { HttpClientModule } from "@angular/common/http";
import { RecibosService } from "./service/recibos.service";
import { CasasDetailPage } from "../pages/casas/casas";
import { GroupByPipePipe } from "./utils/group-by-pipe.pipe";
import { FolioComponent } from "../pages/folio/folio.component";
import { MesDetailPage } from "../pages/mes/mes";
import { OrderByPipePipe } from "./utils/order-by.pipe";
import { GastosService } from "./service/gastos.service";
import { GastosComponent } from "../pages/gastos/gastos.component";

@NgModule({
  declarations: [
    MyApp,
    MesPage,
    MesDetailPage,
    ContactPage,
    HomePage,
    CasasPage,
    CasasDetailPage,
    TabsPage,
    GroupByPipePipe,
    FolioComponent,
    OrderByPipePipe,
    GastosComponent
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MesPage,
    MesDetailPage,
    ContactPage,
    HomePage,
    CasasPage,
    CasasDetailPage,
    TabsPage,
    FolioComponent,
    GastosComponent
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
