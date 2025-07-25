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
import { map, delay, catchError } from 'rxjs/operators';
import { BodyTables } from '../interface/tables';
import { environment } from '../../environments/environment';
import { MOCK_RECIBO_MAX_FOLIO, MOCK_RECIBOS } from '../mocks/mock-recibos';
import { MOCK_CATALOGOS } from '../mocks/mock-catalogos';
import { MOCK_RECIBOS_DETALLE } from '../mocks/mock-recibos-detalle';
import { MOCK_CONCEPTOS } from '../mocks/mock-conceptos';
import { Concepto } from '../interface/recibos';

@Injectable()
export class RecibosService {
  SPREAD_SHEET_ID: string | undefined;
  base = inject(BaseService);
  // constructor(private base: BaseService) {}

  public recibosDetalle$ = new BehaviorSubject<ReciboDetalle[]>([]);
  public casas$ = new BehaviorSubject<Casa[]>([]);
  public conceptos$ = new BehaviorSubject<ConceptoDef[]>([]);

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
    if (this.casas$.getValue().length > 0) {
      // Si ya hay datos en casas$, retorna el observable actual
      return this.casas$.asObservable().pipe(delay(500));
    }
    // Si no hay datos, invoca el método y setea casas$
    if (!environment.production) {
      const mock = MOCK_CATALOGOS;
      this.casas$.next(mock);
      return of(mock).pipe(delay(500));
    }
    return this.base.getEntitiesByRange('Catalogos','E1:I50').pipe(
      map((data: any) => {
        data = data.filter((item: any) => item.ID && item.NOMBRE);
        this.casas$.next(data as Casa[] || []);
        return data as Casa[] || [];
      })
    );
  }

  getFullDataDetail(): Observable<ReciboDetalle[]> {
    if (this.recibosDetalle$.getValue().length > 0) {
      // Si ya hay datos en casas$, retorna el observable actual
      return this.recibosDetalle$.asObservable().pipe(delay(500));
    }
    // Si no hay datos, invoca el método y setea casas$
    if (!environment.production) {
      const mock = MOCK_RECIBOS_DETALLE;
      this.recibosDetalle$.next(mock);
      return of(MOCK_RECIBOS_DETALLE).pipe(delay(1500));
    }
    return this.base.getEntities('RecibosDetalle').pipe(
      map((data: any) => {
        return data as ReciboDetalle[] || [];
      }),
      catchError(this.base.handleError)
    );
  }

/*   getRecibos() {
    if (!environment.production) {
      return of(MOCK_RECIBOS).pipe(delay(500));
    }
    return this.base.getEntities('Recibos');
  } */

  getMaxFolio(): Observable<ReciboMaxFolio> {
    if (!environment.production) {
      return of(MOCK_RECIBO_MAX_FOLIO).pipe(delay(500));
    }
    return this.base.getMaxId('Recibos', 'FOLIO').pipe(
      map((data: any) => {
        return data as ReciboMaxFolio || { FOLIO: 1 }; // Default to 1 if no data found
      }),
      catchError(this.base.handleError)
    );
  }

  getConceptos(): Observable<ConceptoDef[]> {
    if(this.conceptos$ && this.conceptos$.getValue().length > 0) {
      // Si ya hay datos en conceptos$, retorna el observable actual con delay
      return this.conceptos$.asObservable().pipe(delay(500));
    }
    if (!environment.production) {
      const mock = MOCK_CONCEPTOS;
      this.conceptos$.next(mock);
      return of(mock).pipe(delay(500));
    }
    return this.base.getEntitiesByRange('Catalogos', 'A1:A50').pipe(
      map((data: any) => {
        data = data.filter((item: any) => item.NOMBRE);
        return data as ConceptoDef[] || [];
      }),
      catchError(this.base.handleError)
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
