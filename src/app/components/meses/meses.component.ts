import { Component, Input, OnInit } from "@angular/core";
import {
  LoadingController,
  ModalController
} from "@ionic/angular";
import { ReciboDetalle } from "../../interface/recibos";
import { RecibosService } from "../../service/recibos.service";
import { Funtions } from "../../utils/funtions";

@Component({
  selector: "app-meses",
  templateUrl: "meses.component.html",
  styleUrls: ["meses.component.scss"],
  standalone: false
})
export class MesesComponent extends Funtions implements OnInit {
  items: ReciboDetalle[] = [];

  constructor(
    public modalCtrl: ModalController,
    private service: RecibosService,
    loadingCtrl: LoadingController
  ) {
    super(loadingCtrl);
  }

  async ngOnInit() {
    await this.service.getSpreadSheetId().then(() => this.getdata());
  }

  doRefresh(refresher: { complete: () => void }) {
    this.service.getFullDataDetail().subscribe((data: any[]) => {
      this.items = data;
      refresher.complete();
      this.items.sort((a, b) => (a.MES && b.MES && a.MES > b.MES ? -1 : 1));
    });
  }

  getdata() {
    this.service.getFullDataDetail().subscribe(async (data: any[]) => {
      this.items = data;
      this.loadingDismiss();
      this.items.sort((a, b) => (a.MES && b.MES && a.MES > b.MES ? -1 : 1));
    });
    this.showLoading();
  }

  async openModal(detail: any) {
    const modal = await this.modalCtrl.create({
      component : MesesDetailComponent,
      componentProps: { detail : detail.detail }
      });
    await modal.present();
  }
}

@Component({
  selector: "app-meses-detail",
  templateUrl: "meses-detail.component.html",
  // styleUrls: ["meses-detail.component.scss"],
  standalone: false
})
export class MesesDetailComponent extends Funtions {
  @Input() detail: ReciboDetalle[] = [];
  items: ReciboDetalle[] = [];
  itemsBackup: ReciboDetalle[] = [];
  title: string | any;

  constructor(
    public modalCtrl: ModalController,
    loadingCtrl: LoadingController
  ) {
    super(loadingCtrl);
  }

  ngOnInit() {
    this.items = this.detail;
    this.itemsBackup = this.items ? this.items.slice() : [];

    this.title = this.items ? this.items[0].MES : '';
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
        return item.CASA && item.CASA.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
