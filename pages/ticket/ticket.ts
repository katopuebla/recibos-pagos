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
  users: User[];
  constructor(public navCtrl: NavController, private service: UserService) {}

  ionViewDidLoad() {
    this.service.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
    this.onSave();
  }

  onSave() {
    let user: User = {};
    user.id = 4;
    user.uername = "kato4";
    user.email = "kato@gmail.com";
    console.log(user);
    this.service.saveUser(user).subscribe((resp: string) => {
      console.log(resp);
    });
  }
}
