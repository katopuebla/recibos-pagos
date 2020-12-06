import { Component } from "@angular/core";
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
import { Recibo, ReciboDetalle } from "../../interface/recibos";

@Component({
  templateUrl: "casas.html"
})
export class CasasPage extends LoadingUtil {
  option: string = "Casa";
  isAndroid: boolean = false;
  items: Recibo[];
  itemsBackup: Recibo[];

  constructor(
    public modalCtrl: ModalController,
    private service: RecibosService,
    public loadingCtrl: LoadingController
  ) {
    super(loadingCtrl);
  }
  ionViewDidLoad() {
    this.getdata();
  }

  doRefresh(refresher) {
    this.service.getFullData().subscribe((data: any[]) => {
      this.items = data;
      this.itemsBackup = this.items.slice();
      refresher.complete();
    });
  }

  getdata() {
    this.service.getFullData().subscribe(async (data: any[]) => {
      this.items = data;
      this.itemsBackup = this.items.slice();
      this.getDismiss();
    });
    this.getPresent();
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(CasasDetailPage, characterNum);
    modal.present();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.items = this.itemsBackup.slice();
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.items = this.items.filter(item => {
        return (
          item.CASA.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.NOMBRE.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    }
  }
}

@Component({
  selector: "app-casas-detail",
  templateUrl: "./casas-detail.html",
  styleUrls: ["./casas.css"]
})
export class CasasDetailPage extends LoadingUtil {
  items: ReciboDetalle[];
  name: string;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    private service: RecibosService,
    public loadingCtrl: LoadingController
  ) {
    super(loadingCtrl);
  }

  ionViewDidLoad() {
    this.name = this.params.get("casa");
    this.getdata();
  }

  doRefresh(refresher) {
    this.service.getFullDataDetail().subscribe((data: any[]) => {
      this.items = data.filter(value => value.CASA == this.name);
      this.items.sort((a, b) => (a.MES > b.MES ? -1 : 1));
      refresher.complete();
    });
  }

  getdata() {
    console.log(this.params.get("casa"));
    this.service.getFullDataDetail().subscribe(async (data: any[]) => {
      this.items = data.filter(value => value.CASA == this.name);
      this.items.sort((a, b) => (a.MES > b.MES ? -1 : 1));
      this.getDismiss();
    });
    this.getPresent();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSave() {
    /*  let item: Casa = {};
    item.id = 4;
    item.uername = "kato4";
    item.email = "kato@gmail.com";
    console.log(item);
    this.service.saveUser(item).subscribe(async (resp: string) => {
      console.log(resp);
      this.getDismiss();
      this.getdata();
    });
    this.getPresent();*/
  }
}
