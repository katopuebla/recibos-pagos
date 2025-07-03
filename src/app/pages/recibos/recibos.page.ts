import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular'; // Importa ModalController de @ionic/angular
import { AddRecibosComponent } from '../../../app/components/add-recibos/add-recibos.component';
import { RecibosService } from 'src/app/service/recibos.service';
import { LoadingUtil } from 'src/app/utils/loadingUtil';
import { ReciboDetalle } from 'src/app/interface/recibos';

@Component({
  selector: 'app-recibos',
  templateUrl: 'recibos.page.html',
  styleUrls: ['recibos.page.scss'], // Usa .scss para los estilos
  standalone: false,
})
export class RecibosPage extends LoadingUtil implements OnInit {
  option: string = 'Mes';
  isAndroid: boolean = false;
  role: string = '';
  itemsRecibos: ReciboDetalle[] = []; // Initialize to an empty array

  constructor(public modalCtrl: ModalController
    , private recibosService: RecibosService
    , loadingCtrl: LoadingController
      ) {
        super(loadingCtrl);}

  async ngOnInit() {
    await this.recibosService.getSpreadSheetId().then( () => this.getdata());
    const user = localStorage.getItem('user');
    this.role = user ? JSON.parse(user).ROLE : '';
    // Si tienes un método para cargar los recibos, úsalo aquí y actualiza el BehaviorSubject
    // Por ejemplo:
    // this.loadRecibos();
  }

  doRefresh(event: CustomEvent) {
    (event.target as HTMLIonRefresherElement).complete();
  }

    getdata() {
    this.recibosService.getFullDataDetail().subscribe(async (data: any[]) => {
      this.itemsRecibos = [...data];
      this.itemsRecibos = [...this.itemsRecibos];
      this.recibosService.recibosDetalle$.next(this.itemsRecibos); // Actualiza el observable compartido

      this.loadingDismiss();
    });
    this.showLoading();
  }

  // Cuando agregues recibos nuevos:
  async openModal(characterNum: { new: string }) {
    let modal: any = {};
    if (characterNum.new === 'Add') {
      modal = await this.modalCtrl.create({
        component: AddRecibosComponent,
        componentProps: characterNum,
      });
    } else if (characterNum.new === 'PicTicket') {
      modal = await this.modalCtrl.create({
        component: AddRecibosComponent,
        componentProps: characterNum,
      });
    }
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm' && Array.isArray(data) && data.length > 0) {
      this.itemsRecibos.push(...data);
      this.itemsRecibos = [...this.itemsRecibos];
      this.recibosService.recibosDetalle$.next(this.itemsRecibos); // Actualiza el observable compartido
    }
  }
}
