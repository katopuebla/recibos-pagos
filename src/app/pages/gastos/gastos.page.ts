import { Component, OnInit } from '@angular/core';
import {
  ModalController,
  NavController
} from '@ionic/angular';
import { AddGastosComponent } from '../../components/add-gastos/add-gastos.component';
import { GastosService } from '../../service/gastos.service';
import { LoadingUtil } from '../../utils/loadingUtil';
import { GastosDetalle } from '../../interface/gastos';

@Component({
  selector: 'app-gastos',
  templateUrl: 'gastos.page.html',
  styleUrls: ['gastos.page.scss'],
  standalone: false,
})
export class GastosPage implements OnInit {
  items: GastosDetalle[] = [];
  itemsBackup: GastosDetalle[] = [];
  role: string = '';

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    private service: GastosService,
    private loadUtil: LoadingUtil
  ) {
  }

  ngOnInit() {
    this.service.getSpreadSheetId().then(() => this.getdata());
    const user = localStorage.getItem('user');
    this.role = user ? JSON.parse(user).ROLE : '';
  }

  doRefresh(event: CustomEvent) {
    this.service.getFullDataDetail().subscribe((data: any[]) => {
      this.items = [...data]; // Fuerza nueva referencia para refrescar la vista
      this.itemsBackup = [...this.items];
      (event.target as HTMLIonRefresherElement).complete();
    });
  }

  async getdata() {
    this.loadUtil.showing();
    await this.service.getFullDataDetail().subscribe((data: GastosDetalle[]) => {
      this.items = [...data]; // Fuerza nueva referencia para refrescar la vista
      this.itemsBackup = [...this.items];
      this.loadUtil.dismiss();
    });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    // console.log(this.items);
    this.items = this.itemsBackup;
    // console.log("this.items", this.items);
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter(item => {
        return (
          item.Categoria && item.Categoria.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.Nombre && item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1
        );
      });
    }
  }

  async openModal(detail: any) {
    const modal = await this.modalCtrl.create({
      component: AddGastosComponent,
      componentProps: { detail : detail.detail }
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm' && data && Array.isArray(data)) {
      this.items.push(...data);
      this.items = [...this.items]; // Fuerza refresco de la vista
      this.itemsBackup = [...this.items];
      this.service.gastosDetalle$.next(this.items); // Actualiza el observable compartido
    }
  }
}
