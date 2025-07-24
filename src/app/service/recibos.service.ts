import { inject, Injectable } from '@angular/core';
import {
  Casa,
  ConceptoDef,
  Recibo,
  ReciboDetalle,
  ReciboMaxFolio
} from '../interface/recibos';
import { BaseService } from './base.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { BodyTables } from '../interface/tables';
import { environment } from '../../environments/environment';
import { MOCK_RECIBO_MAX_FOLIO, MOCK_RECIBOS } from '../mocks/mock-recibos';
import { MOCK_CATALOGOS } from '../mocks/mock-catalogos';
import { MOCK_RECIBOS_DETALLE } from '../mocks/mock-recibos-detalle';
import { MOCK_CONCEPTOS } from '../mocks/mock-conceptos';

@Injectable()
export class RecibosService {
  SPREAD_SHEET_ID: string | undefined;
  base = inject(BaseService);
  // constructor(private base: BaseService) {}

  public recibosDetalle$ = new BehaviorSubject<ReciboDetalle[]>([]);

  async getSpreadSheetId() {
    this.SPREAD_SHEET_ID = await this.base.loadConfig('RECIBOS_SPREAD_SHEET_ID');
        // console.log('RecibosService: SPREAD_SHEET_ID loaded : ', this.SPREAD_SHEET_ID);
    return this.SPREAD_SHEET_ID;
  }

  async setSpreadSheetId(_spreadSheetId: string) {
    // this.SPREAD_SHEET_ID = _spreadSheetId;
    this.SPREAD_SHEET_ID = await this.base.updateConfig(_spreadSheetId, 'RECIBOS_SPREAD_SHEET_ID');
      // console.log('RecibosService: SPREAD_SHEET_ID updated : ', this.SPREAD_SHEET_ID);
    return this.SPREAD_SHEET_ID;
  }

  getFullData(): Observable<Casa[]> {
    if (!environment.production) {
      return of(MOCK_CATALOGOS).pipe(delay(500));
    }
    return this.base.getEntitiesByRange('Catalogos','E1:I39').pipe(
      map((data: any) => {
        return data as Casa[] || [];
      })
    );
  }

  getFullDataDetail(): Observable<ReciboDetalle[]> {
    if (!environment.production) {
      return of(MOCK_RECIBOS_DETALLE).pipe(delay(500));
    }
    return this.base.getEntities('RecibosDetalle').pipe(
      map((data: any) => {
        return data as ReciboDetalle[] || [];
      })
    );
  }

  getRecibos() {
    if (!environment.production) {
      return of(MOCK_RECIBOS).pipe(delay(500));
    }
    return this.base.getEntities('Recibos');
  }

  getMaxFolio(): Observable<ReciboMaxFolio> {
    if (!environment.production) {
      return of(MOCK_RECIBO_MAX_FOLIO).pipe(delay(500));
    }
    return this.base.getEntitiesByRange('Recibos', 'FOLIO').pipe(
      map((data: any) => {
        return data as ReciboMaxFolio || { FOLIO: 1 }; // Default to 1 if no data found
      })
    );
  }

  getConceptos(): Observable<ConceptoDef[]> {
    if (!environment.production) {
      return of(MOCK_CONCEPTOS).pipe(delay(500));
    }
    return this.base.getEntitiesByRange('Catalogos', 'A1:A17').pipe(
      map((data: any) => {
        return data as ConceptoDef[] || [];
      })
    );

  }

  save(_entity: Recibo, _entities: ReciboDetalle[]) {
    if (!environment.production) {
      // Guardar temporalmente en el array dummy (solo en memoria, no persistente)
      MOCK_RECIBOS.push(_entity);
      if (Array.isArray(_entities)) {
        _entities.forEach(e => MOCK_RECIBOS_DETALLE.push(e));
      }
      // Simula un observable de éxito
      return of({ message: 'Guardado en mock local (desarrollo)' }).pipe(delay(500));
    }
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
