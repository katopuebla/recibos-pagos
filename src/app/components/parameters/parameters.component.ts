import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Recibo } from 'src/app/interface/recibos';
import { BaseService } from 'src/app/service/base.service';
import { GastosService } from 'src/app/service/gastos.service';
import { RecibosService } from 'src/app/service/recibos.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss'],
  standalone: false,
})
export class ParametersComponent  implements OnInit {

  parameters = this.fb.group({
    sheetIdRecibos: [''],
    sheetIdGastos: [''],
  });

  constructor(private fb: FormBuilder, private modalCtrl: ModalController
    , private recibosService: RecibosService, private gastosservice: GastosService
  ) { }

  ngOnInit() {
    this.recibosService.getSpreadSheetId()
    .then( sheetId => this.parameters.patchValue({sheetIdRecibos: sheetId}));
    this.gastosservice.getSpreadSheetId()
    .then( sheetId => this.parameters.patchValue({sheetIdGastos: sheetId}));
  }

  onSave(_parameters: any) {
    console.log(this.parameters.value);
    this.recibosService.setSpreadSheetId(_parameters.sheetIdRecibos)
            // .then( () => this.gastosservice.setSpreadSheetId(_parameters.sheetIdGastos)
                    .then( () => this.modalCtrl.dismiss(this.parameters.value))
                  ;
    // this.gastosservice.setSpreadSheetId(_parameters.sheetIdGastos);
    // this.modalCtrl.dismiss(this.parameters.value);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
