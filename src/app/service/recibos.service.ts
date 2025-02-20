import { Injectable } from '@angular/core';
import {
  Casa,
  ConceptoDef,
  Recibo,
  ReciboDetalle,
  User,
} from '../interface/recibos';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BodyTables } from '../interface/tables';

@Injectable()
export class RecibosService {
  SPREAD_SHEET_ID: string | undefined;

  constructor(private base: BaseService) {
  }
  
  async getSpreadSheetId() {
    this.SPREAD_SHEET_ID = await this.base.loadConfig('RECIBOS_SPREAD_SHEET_ID');
        console.log('RecibosService: SPREAD_SHEET_ID loaded : ', this.SPREAD_SHEET_ID);
    return this.SPREAD_SHEET_ID;
  }

  async setSpreadSheetId(_spreadSheetId: string) {
    // this.SPREAD_SHEET_ID = _spreadSheetId;
    this.SPREAD_SHEET_ID = await this.base.updateConfig(_spreadSheetId, 'RECIBOS_SPREAD_SHEET_ID');
      console.log('RecibosService: SPREAD_SHEET_ID updated : ', this.SPREAD_SHEET_ID);
    return this.SPREAD_SHEET_ID;
  }

  getFullData(): Observable<Casa[]> {
    return this.base.getEntitiesByRange('Catalogos','E1:I39').pipe(
      map((data: any) => {
        return data as Casa[];
      })
    );
  }

  getFullDataDetail(): Observable<ReciboDetalle[]> {
    return this.base.getEntities('RecibosDetalle').pipe(
      map((data: any) => {
        return data as ReciboDetalle[];
      })
    );
  }

  getRecibos() {
    return this.base.getEntities('Recibos');
  }

  getConceptos(): Observable<ConceptoDef[]> {
    return this.base.getEntitiesByRange('Catalogos', 'A1:A17').pipe(
      map((data: any) => {
        return data as ConceptoDef[]
      })
    );

  }

  save(_entity: Recibo, _entities: ReciboDetalle[]) {
    let reciboBodies: BodyTables[] = [];
    let reciboBody: BodyTables = {};
    //header
    reciboBody.table = 'Recibos';
    reciboBody.rows = this.getBody(_entity);
    reciboBodies.push(reciboBody);
    // Detail
    reciboBody = {};
    reciboBody.table = 'RecibosDetalle';
    reciboBody.rows = this.getBodyDetrail(_entities);
    reciboBodies.push(reciboBody);
    //run service
    return this.base.saveEntitiesArray(reciboBodies);
  }

  private getBody(_entity: Recibo | any) {
    let body: string[][] = [];
    let entities: string[] = [];
    entities.push('' + _entity.FOLIO);
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

  private getBodyDetrail(_entities: ReciboDetalle[] | any) {
    let bodiesDetail: string[][] = [];
    if (_entities) {
      // console.log("_entities Detail", _entities);
      _entities.forEach((data: ReciboDetalle | any) => {
        let entities: string[] = [];
        entities.push('' + data.FOLIO);
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
