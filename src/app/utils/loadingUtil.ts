import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable()
export class LoadingUtil {

  constructor(private loadingCtrl: LoadingController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: "Por favor espere... "
    });

    await loading.present();
  }

  loadingDismiss() {
    this.loadingCtrl.dismiss();
  }
}
