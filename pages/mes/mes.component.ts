import { Component, OnInit } from "@angular/core";
import {
  LoadingController,
  ModalController,
  NavController,
  NavParams,
  Platform,
  ViewController
} from "ionic-angular";
import { RecibosService } from "../../app/service/recibos.service";
import { LoadingUtil } from "../../app/utils/loadingUtil";
import { ReciboDetalle } from "../../interface/recibos";

@Component({
  selector: "page-mes",
  templateUrl: "./mes.component.html"
})
export class MesComponent extends LoadingUtil implements OnInit {
  items: ReciboDetalle[];

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    private service: RecibosService,
    public loadingCtrl: LoadingController
  ) {
    super(loadingCtrl);
  }

  ngOnInit() {
    this.getdata();
  }

  doRefresh(refresher) {
    this.service.getFullDataDetail().subscribe((data: any[]) => {
      this.items = data;
      refresher.complete();
      this.items.sort((a, b) => (a.MES > b.MES ? -1 : 1));
    });
  }

  getdata() {
    this.service.getFullDataDetail().subscribe(async (data: any[]) => {
      this.items = data;
      this.getDismiss();
      this.items.sort((a, b) => (a.MES > b.MES ? -1 : 1));
    });
    this.getPresent();
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(MesDetailComponent, characterNum);
    modal.present();
  }
}

@Component({
  selector: "app-mes-detail",
  templateUrl: "./mes-detail.component.html"
})
export class MesDetailComponent extends LoadingUtil {
  items: any[];
  itemsBackup: any[];
  title: string;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController
  ) {
    super(loadingCtrl);
  }

  ionViewDidLoad() {
    this.items = this.params.get("detail");
    this.itemsBackup = this.items.slice();

    this.title = this.items[0].MES;
    // this.getdata();
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
        return item.CASA.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
