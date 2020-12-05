import { Component } from "@angular/core";
import {
  LoadingController,
  ModalController,
  NavController,
  NavParams,
  Platform,
  ViewController
} from "ionic-angular";
import { CasasService } from "../../app/service/casas.service";
import { LoadingUtil } from "../../app/utils/loadingUtil";
import { Recibo, ReciboDetalle } from "../../interface/module";

@Component({
  templateUrl: "casas.html"
})
export class BasicPage extends LoadingUtil {
  items: Recibo[];

  constructor(
    public modalCtrl: ModalController,
    private service: CasasService,
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
      refresher.complete();
    });
  }

  getdata() {
    this.service.getFullData().subscribe(async (data: any[]) => {
      this.items = data;
      this.getDismiss();
    });
    this.getPresent();
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(CasasPage, characterNum);
    modal.present();
  }
}

@Component({
  selector: "app-casas-detail",
  templateUrl: "./casas-detail.html",
  styleUrls: ["./casas.css"]
})
export class CasasPage extends LoadingUtil {
  items: ReciboDetalle[];

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    private service: CasasService,
    public loadingCtrl: LoadingController
  ) {
    super(loadingCtrl);
  }

  ionViewDidLoad() {
    this.getdata();
  }

  doRefresh(refresher) {
    this.service.getFullDataDetail().subscribe((data: any[]) => {
      this.items = data;
      refresher.complete();
    });
  }

  getdata() {
    this.service.getFullDataDetail().subscribe(async (data: any[]) => {
      this.items = data;
      this.getDismiss();
    });
    this.getPresent();
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
