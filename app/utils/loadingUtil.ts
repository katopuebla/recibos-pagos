import { Loading, LoadingController } from "ionic-angular";

export class LoadingUtil {
  loadingCtrl: LoadingController;
  public loading: Loading;

  constructor() {
    this.loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
  }

  getPresent() {
    this.loading.present();
  }

  getDismiss() {
    this.loading.present();
  }
}
