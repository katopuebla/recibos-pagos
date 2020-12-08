import { Injectable } from "@angular/core";
import { Recibo, ReciboDetalle, User } from "../../interface/recibos";
import { BaseService } from "./base.service";

@Injectable()
export class RecibosService {
  SPREAD_SHEET_ID = "1io4aQ7pdM0shvePwssrC7xSIwoVqEfWYlvgsXV5oKoo";
  constructor(private base: BaseService) {
    base.setSpreadSheetId(this.SPREAD_SHEET_ID);
  }

  getFullData() {
    return this.base.getEntities("Casas");
  }

  getFullDataDetail() {
    return this.base.getEntities("RecibosDetalle");
  }

  getRecibos() {
    return this.base.getEntities("Recibos");
  }

  save(_entity: Recibo) {
    let entities = this.getBody(_entity);
    let body: string[][] = [];
    body.push(entities);
    return this.base.saveEntities("Recibos", body);
  }

  saveDetail(_entity: ReciboDetalle) {
    let entities = this.getBodyDetrail(_entity);
    let body: string[][] = [];
    body.push(entities);
    return this.base.saveEntities("RecibossDetalle", body);
  }

  private getBody(_entity: Recibo) {
    let entities: string[] = [];
    entities.push(_entity.FOLIO);
    entities.push(_entity.CASA);
    entities.push(_entity.NOMBRE);
    entities.push(_entity.CANTIDAD);
    entities.push(_entity.CONCEPTO);
    entities.push(_entity.FECHA);
    entities.push(_entity.CORREO);
    entities.push(new Date().toLocaleString());
    return entities;
  }

  private getBodyDetrail(_entity: ReciboDetalle) {
    let entities: string[] = [];
    entities.push(_entity.FOLIO);
    entities.push(_entity.CASA);
    entities.push(_entity.NOMBRE);
    entities.push(_entity.CONCEPTO);
    entities.push(_entity.MES);
    entities.push(_entity.MONTO);
    entities.push(new Date().toLocaleString());
    return entities;
  }
}
