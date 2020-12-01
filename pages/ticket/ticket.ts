import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { UserService } from "../../app/service/user.service";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.html",
  styleUrls: ["./ticket.css"]
})
export class TicketPage {
  constructor(public navCtrl: NavController, private service: UserService) {}

  ionViewDidLoad() {
    this.service
      .getUsers()
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
  }
}
