import { Component } from "@angular/core";

import { ContactPage } from "../contact/contact";
import { HomePage } from "../home/home";
import { GastosComponent } from "../gastos/gastos.component";
import { RecibosPage } from "../recibos/recibos.page";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = RecibosPage;
  tab3Root = GastosComponent;
  tab4Root = ContactPage;

  constructor() {}
}
