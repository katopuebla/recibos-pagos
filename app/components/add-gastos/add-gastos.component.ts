import { Component, OnInit } from "@angular/core";
import { ViewController } from "ionic-angular";

@Component({
  selector: "app-add-gastos",
  templateUrl: "./add-gastos.component.html",
  styleUrls: ["./add-gastos.component.css"]
})
export class AddGastosComponent implements OnInit {
  constructor(public viewCtrl: ViewController) {}

  ngOnInit() {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
