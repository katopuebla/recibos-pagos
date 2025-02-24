import { inject, Injectable } from '@angular/core';
import { BodyTables } from '../interface/tables';
import { CategoriaDef, Gastos, GastosDetalle } from '../interface/gastos';
import { BaseService } from './base.service';
import { map, Observable } from 'rxjs';

@Injectable()
export class GastosService {
  SPREAD_SHEET_ID: string | undefined;

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
    return this.base.getEntitiesByRange('Catalogos','A1:C18').pipe(
      map((data: any) => {
        return data as CategoriaDef[];
      })
    );
  }

  getFullDataDetail(): Observable<GastosDetalle[]> {
    return this.base.getEntities('GastosDetalle').pipe(
      map((data: any) => {
        return data as GastosDetalle[];
      })
    );
  }

  save(_entity: Gastos, _entities: GastosDetalle[]) {
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
