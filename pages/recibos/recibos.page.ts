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

  onSave() {
    /*  let item: Casa = {};
    item.id = 4;
    item.uername = "kato4";
    item.email = "kato@gmail.com";
    console.log(item);
    this.service.saveUser(item).subscribe(async (resp: string) => {
      console.log(resp);
      this.getDismiss();
      this.getdata();
    });
    this.getPresent();*/
  }
}
