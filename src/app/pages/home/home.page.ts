import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AddRecibosComponent } from '../../components/add-recibos/add-recibos.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor( private navCtrl: NavController, private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddRecibosComponent, 
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }

  navegationAbout() {
    this.navCtrl.navigateForward('/tabs/about');
  }

}
