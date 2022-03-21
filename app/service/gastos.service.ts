import { Injectable } from '@angular/core';
import { CategoriaDef, GastosDetalle } from '../../interface/gastos';
import { BaseService } from './base.service';

@Injectable()
export class GastosService {
  //SPREAD_SHEET_ID = "1EvUSuqgS03fbq09SiRtoTXV5KwBgqoVXIH2QPbw5J1c";
  //SPREAD_SHEET_ID = "1Xr7srXe0XEvpTR6Xp7FuecpsCSNZYua1cG-SLP7DgjU"; 2020
 // SPREAD_SHEET_ID = "1jLP1UhEB8CW-59trsoiR0T7WFCfKU8kDtg_vFs4tHxE"; 2021
 SPREAD_SHEET_ID = "15a8vcgP8QRaWTA4AW1dO_xJ8O0RDcd_0bhQyXH4jgj8";

  constructor(private base: BaseService) {
    base.setSpreadSheetId(this.SPREAD_SHEET_ID);
  }

  getCategoriaDef() {
    return this.base.getEntities('CategoriaDef');
  }

  getFullDataDetail() {
    return this.base.getEntities('GastosDetalle');
  }

  save(_entity: GastosDetalle) {
    let entities = this.getBody(_entity);
    let body: string[][] = [];
    body.push(entities);
    return this.base.saveEntities('GastosDetalle', body);
  }

  private getBody(_entity: GastosDetalle) {
    let entities: string[] = [];
    entities.push(_entity.Categoria);
    entities.push(_entity.Nombre);
    entities.push(_entity.Fecha);
    entities.push('' + _entity.Monto);
    entities.push(_entity.Commentario);
    entities.push(new Date().toLocaleString('es-MX', { timeZone: 'UTC' }));
    return entities;
  }
}
