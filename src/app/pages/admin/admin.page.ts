import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ParametersComponent } from 'src/app/components/parameters/parameters.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: false,
})
export class AdminPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openParameter() {
    const modalParameter = await this.modalCtrl.create({
      component: ParametersComponent,
      // componentProps: { sheetIdRecibos: this.sheetIdRecibos, sheetIdGastos: this.sheetIdGastos}
    });
    modalParameter.present();

    const { data, role } = await modalParameter.onWillDismiss();
  }

}
