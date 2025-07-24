import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastUtil {
  constructor(private toastController: ToastController) {}

   async presentToastColor(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'bottom'
    });
    await toast.present();
  }

  async presentToast(_message: string, position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: _message,
      duration: 3000,
      position: position,
    });

    await toast.present();
  }
}