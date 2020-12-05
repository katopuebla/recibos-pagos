import { Component, OnInit } from "@angular/core";
import { LoadingController, NavController } from "ionic-angular";
import { CasasService } from "../../app/service/casas.service";
import { LoadingUtil } from "../../app/utils/loadingUtil";
import { ReciboDetalle } from "../../interface/module";

@Component({
  selector: "app-folio",
  templateUrl: "./folio.component.html",
  styleUrls: ["./folio.component.css"]
})
export class FolioComponent extends LoadingUtil implements OnInit {
  items: ReciboDetalle[];

  constructor(
    public navCtrl: NavController,
    private service: CasasService,
    public loadingCtrl: LoadingController
  ) {
    super(loadingCtrl);
  }

  ionViewDidLoad() {
    this.getdata();
  }

  ngOnInit() {
  }

  doRefresh(refresher) {
    this.service.getFullDataDetail().subscribe((data: any[]) => {
      this.items = data;
      refresher.complete();
      this.items.sort((a, b) => (a.FOLIO > b.FOLIO ? -1 : 1));
    });
  }

  getdata() {
    this.service.getFullDataDetail().subscribe(async (data: any[]) => {
      this.items = data;
      this.getDismiss();
      this.items.sort((a, b) => (a.FOLIO > b.FOLIO ? -1 : 1));
    });
    this.getPresent();
  }
}
