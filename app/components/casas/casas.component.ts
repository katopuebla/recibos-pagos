import { Component } from "@angular/core";
import {
  LoadingController,
  ModalController,
  NavController,
  NavParams,
  Platform,
  ViewController
} from "ionic-angular";
import { RecibosService } from "../../service/recibos.service";
import { LoadingUtil } from "../../utils/loadingUtil";
import { Recibo, ReciboDetalle } from "../../interface/recibos";

@Component({
  selector: "app-casas",
  templateUrl: "casas.component.html"
})
export class CasasComponent extends LoadingUtil {
  items: Recibo[];
  itemsBackup: Recibo[];
  itemDetails: ReciboDetalle[];

  constructor(
    public modalCtrl: ModalController,
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
    let modal = this.modalCtrl.create(CasasDetailComponent, characterNum);
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
  templateUrl: "./casas-detail.component.html",
  styleUrls: ["./casas.component.css"]
})
export class CasasDetailComponent extends LoadingUtil {
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

  sumMonto(array, Id) {
    var values = array.filter(element => element.MES == Id);
    return values.reduce((sum, currentValue) => {
      return sum + currentValue.MONTO;
    }, 0);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
