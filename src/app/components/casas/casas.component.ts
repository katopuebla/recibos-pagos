import { Component, OnInit, Input } from "@angular/core";
import {
  LoadingController,
  ModalController,
} from "@ionic/angular";
import { RecibosService } from "../../service/recibos.service";
import { LoadingUtil } from "../../utils/loadingUtil";
import { Casa, ReciboDetalle } from "../../interface/recibos";

@Component({
  selector: "app-casas",
  templateUrl: "casas.component.html",
  styleUrls: ["casas.component.scss"],
  standalone: false
})
export class CasasComponent implements OnInit {
  items: Casa[] = [];
  itemsBackup: Casa[] = [];

  constructor(
    public modalCtrl: ModalController,
    private service: RecibosService,
    private loadingUtil: LoadingUtil
  ) {  }

  /*ionViewDidLoad() {
    this.getdata();
  }*/

  async ngOnInit() {
    await this.service.getSpreadSheetId().then( () => this.getdata());
  }

/*   doRefresh(refresher: { complete: () => void; }) {
    this.service.getFullData().subscribe((data: Casa[]) => {
      this.items = data;
      this.itemsBackup = this.items.slice();
      refresher.complete();
    });
  } */

  getdata() {
    this.service.getFullData().subscribe(async (data: Casa[]) => {
      this.items = data.filter((item, index, self) =>
        index === self.findIndex((t) => t.ID === item.ID)
      );
      this.itemsBackup = this.items.slice();
      // this.loadingUtil.dismiss();
    });
    // this.loadingUtil.showing();
  }

  async openModal(casa: any) {
    const modal = await this.modalCtrl.create({
      component: CasasDetailComponent,
      componentProps: { casa: casa.casa }
    });
    await modal.present();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.items = this.itemsBackup && this.itemsBackup.slice();
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.items = this.items && this.items.filter(item => {
        return (
          item.ID && item.ID.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.NOMBRE && item.NOMBRE.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    }
  }
}

@Component({
  selector: "app-casas-detail",
  templateUrl: "casas-detail.component.html",
  // styleUrls: ["casas.component.css"],
  standalone: false
})
export class CasasDetailComponent implements OnInit {
  @Input() casa: string = "";
  items: ReciboDetalle[] = [];
  name: string = "";

  constructor(
    public modalCtrl: ModalController,
    private service: RecibosService,
    private loadingUtil: LoadingUtil
  ) {  }

  async ngOnInit() {
    this.name = this.casa;
    await this.service.getSpreadSheetId().then(() => this.getdata());
  }

  doRefresh(refresher: { complete: () => void }) {
    this.service.getFullDataDetail().subscribe((data: any[]) => {
      this.items = [...data.filter(value => value.CASA == this.name)];
      this.items.sort((a, b) => (a.MES && b.MES && a.MES > b.MES ? -1 : 1));
      refresher.complete();
    });
  }

  getdata() {
    console.log(this.casa);
    this.service.recibosDetalle$.subscribe(async (data: any[]) => {
      this.items = [...data.filter(value => value.CASA == this.name)];
      this.items.sort((a, b) => (a.MES && b.MES && a.MES > b.MES ? -1 : 1));
      // this.loadingUtil.dismiss();
    });
    // this.loadingUtil.showing();
  }

  sumMonto(array: any[], Id: any) {
    var values = array.filter(element => element.MES == Id);
    return values.reduce((sum, currentValue) => {
      return sum + currentValue.MONTO;
    }, 0);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}

