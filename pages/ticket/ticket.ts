import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { UserService } from "../../app/service/user.service";
import { User } from "../../interface/module";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.html",
  styleUrls: ["./ticket.css"]
})
export class TicketPage {
  users: User = [];
  constructor(public navCtrl: NavController, private service: UserService) {}

  ionViewDidLoad() {
    this.service.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
