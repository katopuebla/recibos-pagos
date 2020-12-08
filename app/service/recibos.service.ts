import { Injectable } from "@angular/core";
import { Recibo, ReciboDetalle, User } from "../../interface/recibos";
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

  save(_entity: Recibo) {
    let entities = this.getBody(_entity);
    let body: string[][] = [];
    body.push(entities);
    return this.base.saveEntities("Recibos", body);
  }

  saveDetail(_entities: ReciboDetalle[]) {
    console.log("_entities", _entities);
    let entitiesDetail = this.getBodyDetrail(_entities);
    // let body: string[][] = [];
    // body.push(entitiesDetail);
    console.log("body: ", entitiesDetail);
    return this.base.saveEntities("RecibosDetalle", entitiesDetail);
  }

  private getBody(_entity: Recibo) {
    let entities: string[] = [];
    entities.push("" + _entity.FOLIO);
    entities.push(_entity.CASA);
    entities.push(_entity.NOMBRE);
    entities.push(_entity.CANTIDAD);
    entities.push(_entity.CONCEPTO);
    entities.push(_entity.FECHA);
    entities.push(_entity.CORREO);
    entities.push(new Date().toLocaleString());
    return entities;
  }

  private getBodyDetrail(_entities: ReciboDetalle[]) {
    let entitiesDetail: string[][] = [];
    if (_entities) {
      console.log("_entities Detail", _entities);
      _entities.forEach(data => {
        let entities: string[] = [];
        entities.push("" + data.FOLIO);
        entities.push(data.CASA);
        entities.push(data.NOMBRE);
        entities.push(data.CONCEPTO);
        entities.push(data.MES);
        entities.push(data.MONTO);
        entities.push(new Date().toLocaleString());
        entitiesDetail.push(entities);
      });
    }
    console.log("_entities Detail return ", entitiesDetail);
    return entitiesDetail;
  }
}
