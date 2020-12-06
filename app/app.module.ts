import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { MesComponent } from "../pages/mes/mes.component";
import { MesDetailComponent } from "../pages/mes/mes.component";
import { GastosComponent } from "../pages/gastos/gastos.component";
import { FolioComponent } from "../pages/folio/folio.component";

import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { CasasComponent } from "../pages/casas/casas";
import { TabsPage } from "../pages/tabs/tabs";
import { BaseService } from "./service/base.service";
import { UserService } from "./service/user.service";
import { HttpClientModule } from "@angular/common/http";
import { RecibosService } from "./service/recibos.service";
import { CasasDetailPage } from "../pages/casas/casas";
import { GroupByPipePipe } from "./utils/group-by-pipe.pipe";
import { OrderByPipePipe } from "./utils/order-by.pipe";
import { GastosService } from "./service/gastos.service";
import { RecibosPage } from "../pages/recibos/recibos.page";

@NgModule({
  declarations: [
    MyApp,
    MesComponent,
    MesDetailComponent,
    ContactPage,
    HomePage,
    CasasComponent,
    CasasDetailPage,
    TabsPage,
    RecibosPage,
    GroupByPipePipe,
    OrderByPipePipe,
    GastosComponent,
    FolioComponent
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  exports: [FolioComponent, CasasComponent, MesComponent, MesDetailComponent],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    CasasDetailPage,
    TabsPage,
    RecibosPage,
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
