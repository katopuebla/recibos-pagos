import { Component, OnInit, Input } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ReciboDetalle } from '../../interface/recibos';
import { RecibosService } from '../../service/recibos.service';
import { Funtions } from '../../utils/funtions';
import { LoadingUtil } from 'src/app/utils/loadingUtil';

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
    private loadingUtil: LoadingUtil
  ) {
    super();
  }

  async ngOnInit() {
    await this.service.recibosDetalle$.subscribe((data: ReciboDetalle[]) => {
      this.items = data;
      // this.dismiss();
      this.items.sort((a, b) => (a.CASA && b.CASA && a.CASA > b.CASA ? 1 : -1));
      this.itemsBackup = this.items ? this.items.slice() : [];
      this.title = new Date().toDateString();

      let lastMonth = new Date().getMonth() - 1;
      this.itemsLastMonth = data.filter(mes => {
        return mes.MES && new Date(mes.MES).getMonth() === lastMonth;
      });
      this.itemsLastMonth.sort((a, b) => (a.CASA && b.CASA && a.CASA > b.CASA ? 1 : -1));
      // Aquí puedes aplicar lógica adicional si necesitas filtrar por mes, etc.
    });
    // Si necesitas cargar datos iniciales, puedes hacerlo aquí también
    // await this.service.getSpreadSheetId().then(() => this.getdata());
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
      this.loadingUtil.dismiss();
      this.items.sort((a, b) => (a.CASA && b.CASA && a.CASA > b.CASA ? 1 : -1));
      this.itemsBackup = this.items ? this.items.slice() : [];
      this.title = new Date().toDateString();

      let lastMonth = new Date().getMonth() - 1;
      this.itemsLastMonth = data.filter(mes => {
        return mes.MES && new Date(mes.MES).getMonth() === lastMonth;
      });
      this.itemsLastMonth.sort((a, b) => (a.CASA && b.CASA && a.CASA > b.CASA ? 1 : -1));
    });
    this.loadingUtil.showing();
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
  @Input() detail: ReciboDetalle[] = [];
  items: ReciboDetalle[] = []; // Initialize to an empty array
  itemsBackup: ReciboDetalle[] = [];
  title: string | any;

  constructor(
    public modalCtrl: ModalController
  ) {
    super();
  }

  ngOnInit() {
    this.items = this.detail; // recibe datos del modal
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
