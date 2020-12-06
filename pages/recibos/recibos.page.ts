import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recibos",
  templateUrl: "./recibos.page.html",
  styleUrls: ["./recibos.page.css"]
})
export class RecibosPage implements OnInit {
  option: string = "Casa";
  isAndroid: boolean = false;

  constructor() {}

  ngOnInit() {}
}
