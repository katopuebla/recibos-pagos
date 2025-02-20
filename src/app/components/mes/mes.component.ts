import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavParams } from '@ionic/angular';
import { ReciboDetalle } from '../../interface/recibos';
import { RecibosService } from '../../service/recibos.service';
import { Funtions } from '../../utils/funtions';

@Component({
  selector: 'app-mes',
  templateUrl: 'mes.component.html',
  standalone: false, // Updated for Ionic 8
})
export class MesComponent extends Funtions implements OnInit {
  items: ReciboDetalle[] = []; // Initialize to an empty array
  itemsLastMonth!: any[];
  title!: string | any;
  itemsBackup!: ReciboDetalle[];

  constructor(
    public modalCtrl: ModalController,
    private service: RecibosService,
    loadingCtrl: LoadingController
  ) {
    super(loadingCtrl);
  }

  async ngOnInit() {
    await this.service.getSpreadSheetId().then( () => this.getdata());
  }

  doRefresh(event: { target: { complete: () => void; }; }) {
    this.service.getFullDataDetail().subscribe((data: any[]) => {
      this.items = data.find(
        mes => new Date(mes.header).getMonth() == new Date().getMonth()
      );
      event.target.complete();
    });
  }

  getdata() {
    this.service.getFullDataDetail().subscribe((data: ReciboDetalle[]) => {
      let today = new Date().getMonth();
      this.items = data;
      this.loadingDismiss();
      this.items.sort((a, b) => (a.CASA && b.CASA && a.CASA > b.CASA ? 1 : -1));
      this.itemsBackup = this.items ? this.items.slice() : [];
      this.title = this.items[0].MES;

      let lastMonth = new Date().getMonth() - 1;
      this.itemsLastMonth = data.filter(mes => {
        return mes.MES && new Date(mes.MES).getMonth() === lastMonth;
      });
      this.itemsLastMonth.sort((a, b) => (a.CASA && b.CASA && a.CASA > b.CASA ? 1 : -1));
    });
    this.showLoading();
  }

  getItems(ev: any) {
    this.items = this.itemsBackup.slice();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter(item => {
        return item.CASA && item.CASA.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  async openModal(detail: any) {
    const modal = await this.modalCtrl.create({
      component: MesDetailComponent,
      componentProps: { detail : detail.detail },
    });
    await modal.present();
  }
}

@Component({
  selector: 'app-mes-detail',
  templateUrl: 'mes-detail.component.html',
  standalone: false, // Updated for Ionic 8
})
export class MesDetailComponent extends Funtions {
  items: ReciboDetalle[] = []; // Initialize to an empty array
  itemsBackup: ReciboDetalle[] = [];
  title: string | any;

  constructor(
    public modalCtrl: ModalController,
    private navParams: NavParams,
    loadingCtrl: LoadingController
  ) {
    super(loadingCtrl);
  }

  ngOnInit() {
    this.items = this.navParams.get('detail'); // recibe datos del modal
    this.itemsBackup = this.items ? this.items.slice() : [];
    this.title = this.items ? this.items[0].MES : '';
  }

  getItems(ev: any) {
    this.items = this.itemsBackup ? this.itemsBackup.slice() : [];
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter(item => {
        return item.CASA && item.CASA.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
