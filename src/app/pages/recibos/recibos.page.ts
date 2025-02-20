import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; // Importa ModalController de @ionic/angular
import { AddRecibosComponent } from '../../../app/components/add-recibos/add-recibos.component';
import { RecibosService } from 'src/app/service/recibos.service';
import { LoadingUtil } from 'src/app/utils/loadingUtil';
 
@Component({
  selector: 'app-recibos',
  templateUrl: 'recibos.page.html',
  styleUrls: ['recibos.page.scss'], // Usa .scss para los estilos
  standalone: false,
})
export class RecibosPage implements OnInit {
  option: string = 'Mes';
  isAndroid: boolean = false;

  constructor(public modalCtrl: ModalController
    , private recibosService: RecibosService
    , private loadUtil: LoadingUtil
  ) {}

  async ngOnInit() {
    const _spreadSheetId = await this.recibosService.getSpreadSheetId(); //.then(
    //   (spreadSheetId) => {
    //     console.log('RecibosPage: SPREAD_SHEET_ID loaded : ', spreadSheetId);
    //     // this.loadUtil.loadingDismiss();
    //   }
    // );
    // this.loadUtil.showLoading();
  }

  async openModal(characterNum: { new: string }) { // openModal debe ser async
    let modal: any = {};
    console.log(characterNum.new);
    if (characterNum.new === 'Add') {
      modal = await this.modalCtrl.create({ // Usa create() con opciones
        component: AddRecibosComponent,
        componentProps: characterNum, // Pasa los datos con componentProps
      });
    } else if (characterNum.new === 'PicTicket') {
      console.log('characterNum');
      modal = await this.modalCtrl.create({
        component: AddRecibosComponent,
        componentProps: characterNum,
      });
    }
    await modal.present(); // Espera a que se presente el modal
  }
}