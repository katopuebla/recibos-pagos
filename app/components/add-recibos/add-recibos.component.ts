import { Component, OnInit } from "@angular/core";
import { ViewController } from "ionic-angular";

@Component({
  selector: "app-add-recibos",
  templateUrl: "./add-recibos.component.html",
  styleUrls: ["./add-recibos.component.css"]
})
export class AddRecibosComponent implements OnInit {
  constructor(public viewCtrl: ViewController) {}

  ngOnInit() {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
