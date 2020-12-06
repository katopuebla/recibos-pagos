import { Component } from "@angular/core";

import { MesPage } from "../mes/mes";
import { ContactPage } from "../contact/contact";
import { HomePage } from "../home/home";
import { CasasPage } from "../casas/casas";
import { FolioComponent } from "../folio/folio.component";
import { GastosComponent } from "../gastos/gastos.component";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = CasasPage;
  tab3Root = FolioComponent;
  tab4Root = MesPage;
  tab5Root = GastosComponent;
  tab6Root = ContactPage;

  constructor() {}
}
