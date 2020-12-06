import { Component, OnInit } from "@angular/core";
import { LoadingController, NavController } from "ionic-angular";
import { GastosService } from "../../app/service/gastos.service";
import { LoadingUtil } from "../../app/utils/loadingUtil";
import { GastosDetalle } from "../../interface/gastos";

@Component({
  selector: "app-gastos",
  templateUrl: "./gastos.component.html",
  styleUrls: ["./gastos.component.css"]
})
export class GastosComponent extends LoadingUtil implements OnInit {
  items: GastosDetalle[];
  itemsBackup: any[];

  constructor(
    public navCtrl: NavController,
    private service: GastosService,
    public loadingCtrl: LoadingController
  ) {
    super(loadingCtrl);
  }

  ionViewDidLoad() {
    this.getdata();
  }

  ngOnInit() {}

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
      this.itemsBackup = this.items;
      this.getDismiss();
    });
    this.getPresent();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    console.log(this.items);
    this.items = this.itemsBackup;
    // console.log("this.items", this.items);
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.items = this.items.filter(item => {
        return (
          item.Categoria.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    }
  }
}
