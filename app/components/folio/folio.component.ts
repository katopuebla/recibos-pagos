import { Component, OnInit } from "@angular/core";
import { LoadingController, NavController } from "ionic-angular";
import { RecibosService } from "../../service/recibos.service";
import { LoadingUtil } from "../../utils/loadingUtil";
import { ReciboDetalle } from "../../interface/recibos";

@Component({
  selector: "app-folio",
  templateUrl: "./folio.component.html",
  styleUrls: ["./folio.component.css"]
})
export class FolioComponent extends LoadingUtil implements OnInit {
  items: ReciboDetalle[];
  itemsBackup: any[];

  constructor(
    public navCtrl: NavController,
    private service: RecibosService,
    public loadingCtrl: LoadingController
  ) {
    super(loadingCtrl);
  }

  /*ionViewDidLoad() {
    this.getdata();
  }*/

  ngOnInit() {
    this.getdata();
  }

  doRefresh(refresher) {
    this.service.getFullDataDetail().subscribe((data: any[]) => {
      this.items = data;
      this.itemsBackup = this.items.slice();
      refresher.complete();
    });
  }

  getdata() {
    this.service.getFullDataDetail().subscribe(async (data: any[]) => {
      this.items = data;
      this.itemsBackup = this.items.slice();
      this.getDismiss();
    });
    this.getPresent();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.items = this.itemsBackup.slice();
    console.log("this.items", this.items);
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.items = this.items.filter(item => {
        return item.FOLIO == val;
      });
    }
  }
}
