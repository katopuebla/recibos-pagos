import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-comprobante-casa",
  templateUrl: "./comprobante-casa.component.html",
  styleUrls: ["./comprobante-casa.component.css"]
})
export class ComprobanteCasaComponent implements OnInit {
  constructor(private clipboard: Clipboard) {}

  ngOnInit() {
    console.log("Comprobante");

    //this.clipboard.copy("Hello world");
    /*
    this.clipboard.paste().then(
      (resolve: string) => {
        console.log(resolve)
        alert(resolve);
      },
      (reject: string) => {
        alert("Error: " + reject);
      }
    );
*/
    //  this.clipboard.clear();
  }
}
