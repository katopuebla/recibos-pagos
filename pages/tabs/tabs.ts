import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Component } from "@angular/core";
import { HomePage } from "../home/home";

@IonicPage({
  name: "tabs"
})
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = "RecibosPage";
  tab3Root = "GastosComponent";
  tab4Root = "ContactPage";

  constructor() {}
}
