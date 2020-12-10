import { Injectable } from "@angular/core";
import {
  BodyTables,
  Recibo,
  ReciboDetalle,
  User
} from "../../interface/recibos";
import { BaseService } from "./base.service";

@Injectable()
export class RecibosService {
  // SPREAD_SHEET_ID = "1io4aQ7pdM0shvePwssrC7xSIwoVqEfWYlvgsXV5oKoo";
  SPREAD_SHEET_ID = "1YxCDsSTdWWkaV6unC3jH9J-aY16KqY8pCZmf28K2j7E";
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

  getConceptos() {
    return this.base.getEntities("ConceptoDef");
  }

  save(_entity: Recibo, _entities: ReciboDetalle[]) {
    let reciboBodies: BodyTables[] = [];
    let reciboBody: BodyTables = {};
    //header
    reciboBody.table = "Recibos";
    reciboBody.rows = this.getBody(_entity);
    reciboBodies.push(reciboBody);
    // Detail
    reciboBody = {};
    reciboBody.table = "RecibosDetalle";
    reciboBody.rows = this.getBodyDetrail(_entities);
    reciboBodies.push(reciboBody);
    //run service
    return this.base.saveEntitiesArray(reciboBodies);
  }

  private getBody(_entity: Recibo) {
    let body: string[][] = [];
    let entities: string[] = [];
    entities.push("" + _entity.FOLIO);
    entities.push(_entity.CASA);
    entities.push(_entity.NOMBRE);
    entities.push(_entity.CANTIDAD);
    entities.push(_entity.CONCEPTO);
    entities.push(_entity.FECHA);
    entities.push(_entity.CORREO);
    entities.push(new Date().toLocaleString());
    body.push(entities);
    return body;
  }

  private getBodyDetrail(_entities: ReciboDetalle[]) {
    let bodiesDetail: string[][] = [];
    if (_entities) {
      // console.log("_entities Detail", _entities);
      _entities.forEach(data => {
        let entities: string[] = [];
        entities.push("" + data.FOLIO);
        entities.push(data.CASA);
        entities.push(data.NOMBRE);
        entities.push(data.CONCEPTO);
        entities.push(data.MES);
        entities.push(data.MONTO);
        entities.push(new Date().toLocaleString());
        bodiesDetail.push(entities);
      });
    }
    //console.log("_entities Detail return ", bodiesDetail);
    return bodiesDetail;
  }

  sendEmail(info: any, Detail: any[]) {
    return this.base.sendEmail(info, Detail);
  }
}
