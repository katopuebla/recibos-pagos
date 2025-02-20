import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastUtil {
  static presentToast(_message: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private toastController: ToastController) {}

  async presentToast(_message: string, position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: _message,
      duration: 3000,
      position: position,
    });

    await toast.present();
  }
}