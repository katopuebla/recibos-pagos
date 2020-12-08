import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddRecibosComponent } from '../../app/components/add-recibos/add-recibos.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(AddRecibosComponent, characterNum);
    modal.present();
  }

}
