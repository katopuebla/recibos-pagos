import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable({ providedIn: 'root' })
export class LoadingUtil {

  loading: any;

  constructor(private loadingCtrl: LoadingController) {}

  async showing() {
    if (this.loading && this.loading.presented) {
      // Ya hay un loading activo, no crear otro
      return;
    }
    this.loading = await this.loadingCtrl.create({
      message: "Por favor espere... "
    });

    await this.loading.present();
  }

  dismiss() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
      // this.loadingCtrl.dismiss();
  }
}
