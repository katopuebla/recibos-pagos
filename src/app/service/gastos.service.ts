import { inject, Injectable } from '@angular/core';
import { BodyTables } from '../interface/tables';
import { CategoriaDef, Gastos, GastosDetalle } from '../interface/gastos';
import { BaseService } from './base.service';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { MOCK_GASTOS, MOCK_GASTOS_DETALLE, MOCK_CATEGORIAS } from '../mocks/mock-gastos';

@Injectable()
export class GastosService {
  SPREAD_SHEET_ID: string | undefined;

  public gastosDetalle$ = new BehaviorSubject<GastosDetalle[]>([]);
  public gastos$ = new BehaviorSubject<Gastos[]>([]);
  public categorias$ = new BehaviorSubject<CategoriaDef[]>([]);

  base = inject(BaseService);
  // constructor(private base: BaseService) {}

  async getSpreadSheetId() {
    this.SPREAD_SHEET_ID = await this.base.loadConfig('GASTOS_SPREAD_SHEET_ID');
      // console.log('GastosService: SPREAD_SHEET_ID loaded : {}', this.SPREAD_SHEET_ID);
    return this.SPREAD_SHEET_ID;
  }

  setSpreadSheetId(_spreadSheetId: string) {
    this.SPREAD_SHEET_ID = _spreadSheetId;
    this.base.updateConfig(this.SPREAD_SHEET_ID, 'GASTOS_SPREAD_SHEET_ID')
      .then( property => {
        this.SPREAD_SHEET_ID = property;
        console.log('GastosService: SPREAD_SHEET_ID updated : {}', this.SPREAD_SHEET_ID)
      })
      .catch( error => console.error(error));
  }

  getCategoriaDef(): Observable<CategoriaDef[]> {
    if (this.categorias$.getValue().length > 0) {
      // Si ya hay datos en categorias$, retorna el observable actual con delay
      return this.categorias$.asObservable().pipe(delay(500));
    }

    if (!environment.production) {
      const mock = MOCK_CATEGORIAS;
      this.categorias$.next(mock);
      return of(mock).pipe(delay(500));
    }
    return this.base.getEntitiesByRange('Catalogos','A1:C50').pipe(
      map((data: any) => {
        data = data.filter((item: any) => item.Nombre);
        return data as CategoriaDef[];
      }),
      catchError(this.base.handleError)
    );
  }

  getFullDataDetail(): Observable<GastosDetalle[]> {
    if (this.gastosDetalle$.getValue().length > 0) {
      // Si ya hay datos en gastosDetalle$, retorna el observable actual
      return this.gastosDetalle$.asObservable().pipe(delay(500));
    }
    if (!environment.production) {
      const mock = MOCK_GASTOS_DETALLE;
      this.gastosDetalle$.next(mock);
      return of(mock).pipe(delay(500));
    }
    return this.base.getEntities('GastosDetalle').pipe(
      map((data: any) => {
        return data as GastosDetalle[];
      }),
      catchError(this.base.handleError)
    );
  }

  save(_entity: Gastos, _entities: GastosDetalle[]) {
    if (!environment.production) {
      MOCK_GASTOS.push(_entity);
      if (Array.isArray(_entities)) {
        _entities.forEach(e => MOCK_GASTOS_DETALLE.push(e));
      }
      return of({ message: 'Guardado en mock local (desarrollo)' }).pipe(delay(500));
    }
    let gastoBodies: BodyTables[] = [];
    let gastoBody: BodyTables = {};
    //header
    gastoBody.table = 'Gastos';
    gastoBody.rows = this.getBody(_entity);
    gastoBodies.push(gastoBody);
    // Detail
    gastoBody = {};
    gastoBody.table = 'GastosDetalle';
    gastoBody.rows = this.getBodyDetrail(_entities);
    gastoBodies.push(gastoBody);
    //run service
    return this.base.saveEntitiesArray(gastoBodies);
  }

  private getBody(_entity: GastosDetalle | any) {
    let body: string[][] = [];
    let entities: string[] = [];
    entities.push(_entity.Categoria);
    entities.push(_entity.Nombre);
    entities.push(_entity.Fecha);
    entities.push('' + _entity.Monto);
    entities.push(_entity.Commentario);
    entities.push(new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' }));
    body.push(entities);
    return body;
  }

  private getBodyDetrail(_entities: GastosDetalle[] | any) {
    let bodiesDetail: string[][] = [];
    if (_entities) {
      // console.log("_entities Detail", _entities);
      _entities.forEach((data: GastosDetalle | any) => {
        let entities: string[] = [];
        entities.push(data.Categoria);
        entities.push(data.Nombre);
        entities.push(data.Fecha);
        entities.push('' + data.Monto);
        entities.push(data.Commentario);
        entities.push(new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' }));
        bodiesDetail.push(entities);
      });
    }
    //console.log("_entities Detail return ", bodiesDetail);
    return bodiesDetail;
  }

}
