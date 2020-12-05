import { Loading, LoadingController } from "ionic-angular";

export class LoadingUtil {
  private loading: Loading;

  constructor(public loadingCtrl: LoadingController) {}

  getPresent() {
    this.loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loading.present();
  }

  getDismiss() {
    this.loading.dismiss();
  }
}
