import { Component, OnInit } from '@angular/core';
import {
  LoadingController,
  ModalController,
  NavController,
  NavParams,
  Platform,
  ViewController
} from 'ionic-angular';
import { ReciboDetalle } from '../../../interface/recibos';
import { RecibosService } from '../../service/recibos.service';
import { Funtions } from '../../utils/funtions';

@Component({
  selector: 'app-mes',
  templateUrl: './mes.component.html'
})
export class MesComponent extends Funtions implements OnInit {
  items: ReciboDetalle[];
  itemsLastMonth: ReciboDetalle[];
  title: string;
  itemsBackup: ReciboDetalle[];

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
      this.items = data.find(
        mes => new Date(mes.header).getMonth() == new Date().getMonth()
      );
      refresher.complete();
    });
  }

  getdata() {
    this.service.getFullDataDetail().subscribe(async (data: any[]) => {
      let today = new Date().getMonth();
      /*this.items = data.filter(mes => {
        return new Date(mes.MES).getMonth() === today;
      });*/
      this.items = data;
      this.getDismiss();
      this.items.sort((a, b) => (a.CASA > b.CASA ? 1 : -1));
      this.itemsBackup = this.items.slice();
      this.title = this.items[0].MES;

      let lastMonth = new Date().getMonth() - 1;
      this.itemsLastMonth = data.filter(mes => {
        return new Date(mes.MES).getMonth() === lastMonth;
      });
      this.itemsLastMonth.sort((a, b) => (a.CASA > b.CASA ? 1 : -1));
    });
    this.getPresent();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.items = this.itemsBackup.slice();
    console.log('this.items', this.items);
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter(item => {
        return item.CASA.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  openModal(detail) {
    console.log('detail', detail);
    let modal = this.modalCtrl.create(MesDetailComponent, detail);
    modal.present();
  }
}

@Component({
  selector: 'app-mes-detail',
  templateUrl: './mes-detail.component.html'
})
export class MesDetailComponent extends Funtions {
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

  ngOnInit() {
    this.items = this.params.get('detail');
    this.itemsBackup = this.items.slice();
    this.title = this.items[0].MES;
    // this.getdata();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.items = this.itemsBackup.slice();
    console.log('this.items', this.items);
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter(item => {
        return item.CASA.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
