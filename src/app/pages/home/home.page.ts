import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { AddRecibosComponent } from '../../components/add-recibos/add-recibos.component';
import { ParametersComponent } from 'src/app/components/parameters/parameters.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  role: string = '';

  constructor( private router: Router, private modalCtrl: ModalController, 
    private actionSheet: ActionSheetController) {}

  ngOnInit() {
    const user = localStorage.getItem('user');
    this.role = user ? JSON.parse(user).ROLE : '';
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddRecibosComponent, 
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if ( role === 'confirm') {
      // window.location.reload();
      this.router.navigate(['/tabs/recibos']);
    }
  }

  async openParameter() {
    const modalParameter = await this.modalCtrl.create({
      component: ParametersComponent,
      // componentProps: { sheetIdRecibos: this.sheetIdRecibos, sheetIdGastos: this.sheetIdGastos}
    });
    modalParameter.present();

    const { data, role } = await modalParameter.onWillDismiss();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheet.create({
      header: 'Opciones',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Cerrar sesión',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          localStorage.removeItem('user');
          this.router.navigate(['/login']);
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
