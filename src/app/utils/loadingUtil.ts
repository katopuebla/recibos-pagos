import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable()
export class LoadingUtil {

  loading: any;

  constructor(private loadingCtrl: LoadingController) {}

  async showing() {
    this.loading = await this.loadingCtrl.create({
      message: "Por favor espere... "
    });

    await this.loading.present();
  }

  dismiss() {
    // this.loadingCtrl.dismiss();
    this.loading.dismiss();
  }
}
