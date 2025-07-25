import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable({ providedIn: 'root' })
export class AlertUtil {

  constructor(private alertCtrl: AlertController) {}

  async showSucess(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Exito',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
    console.log('Success:', message);
  }

  async showError(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
    console.error('Error:', message);
  }

}
