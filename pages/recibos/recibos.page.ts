import { Component, OnInit } from "@angular/core";
import { ModalController } from "ionic-angular";
import { AddRecibosComponent } from "../../app/components/add-recibos/add-recibos.component";
import { ComprobanteCasaComponent } from "./comprobante-casa/comprobante-casa.component";

@Component({
  selector: "app-recibos",
  templateUrl: "./recibos.page.html",
  styleUrls: ["./recibos.page.css"]
})
export class RecibosPage implements OnInit {
  option: string = "Mes";
  isAndroid: boolean = false;

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}

  openModal(characterNum) {
    let modal: any = {};
    console.log(characterNum.new);
    if (characterNum.new == "Add") {
      modal = this.modalCtrl.create(AddRecibosComponent, characterNum);
    } else if (characterNum.new == "PicTicket") {
      console.log('characterNum');
      modal = this.modalCtrl.create(ComprobanteCasaComponent, characterNum);
    }
    modal.present();
  }
}
