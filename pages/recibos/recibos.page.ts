import { Component, OnInit } from "@angular/core";
import { ModalController } from "ionic-angular";
import { AddRecibosComponent } from "../../app/components/add-recibos/add-recibos.component";

@Component({
  selector: "app-recibos",
  templateUrl: "./recibos.page.html",
  styleUrls: ["./recibos.page.css"]
})
export class RecibosPage implements OnInit {
  option: string = "Casa";
  isAndroid: boolean = false;

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}

  openModal(characterNum) {
    let modal = this.modalCtrl.create(AddRecibosComponent, characterNum);
    modal.present();
  }

}
