import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { AddRecibosComponent } from '../../app/components/add-recibos/add-recibos.component';
//import { AboutComponent } from '../about/about.component';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {
    //this.navCtrl.push(AboutComponent);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(AddRecibosComponent, characterNum);
    modal.present();
  }

  navegationAbout() {
    this.navCtrl.push('AboutComponent');
  }
}
