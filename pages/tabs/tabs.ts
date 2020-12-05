import { Component } from "@angular/core";

import { AboutPage } from "../about/about";
import { ContactPage } from "../contact/contact";
import { HomePage } from "../home/home";
import { CasasPage } from "../casas/casas";
import { FolioComponent } from "../folio/folio.component";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = CasasPage;
  tab3Root = FolioComponent;
  tab4Root = AboutPage;
  tab5Root = ContactPage;

  constructor() {}
}
