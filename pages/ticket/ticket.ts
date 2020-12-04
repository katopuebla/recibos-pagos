import { Component } from "@angular/core";
import { LoadingController, NavController } from "ionic-angular";
import { UserService } from "../../app/service/user.service";
import { LoadingUtil } from "../../app/utils/loadingUtil";
import { User } from "../../interface/module";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.html",
  styleUrls: ["./ticket.css"]
})
export class TicketPage extends LoadingUtil {
  users: User[];

  constructor(public navCtrl: NavController, private service: UserService) {
    super();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.service.getUsers().subscribe((data: User[]) => {
      this.users = data;
      this.loading.dismiss();
    });
    // this.onSave();
  }

  doRefresh(refresher) {
    console.log("Begin async operation", refresher);

    setTimeout(() => {
      console.log("Async operation has ended");
      refresher.complete();
    }, 2000);
  }

  onSave() {
    let user: User = {};
    user.id = 4;
    user.uername = "kato4";
    user.email = "kato@gmail.com";
    console.log(user);
    this.loading.present();
    this.service.saveUser(user).subscribe((resp: string) => {
      console.log(resp);
      this.loading.dismiss();
    });
  }
}
