import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BodiesSaving, BodySaving, BodyTables } from "../interface/tables";
import { environment } from "../../environments/environment";
import { throwError } from "rxjs";

@Injectable()
export class BaseService {
  // script sheet to json
  BASE_URL =
    "https://script.google.com/macros/s/AKfycbza19jUFnHpxywV7YrIpEPYDybxs7p2CGcdcp3b6euN1V7NyMNUU3cEUfKVUAvOFCrR/exec";
//  environment.baseHref + "api/exec";
  SPREAD_SHEET_ID: string | undefined;
  TABLES = [];

  _http = inject(HttpClient);
  // constructor(private _http: HttpClient) {}
  constructor() {}

  // 'GASTOS_SPREAD_SHEET_ID'
  public async loadConfig(property: string) : Promise<string> {
    var config: any;
    if (environment.production) {
      config = await this._http.get('./assets/config.properties', { responseType: 'text' }).toPromise();
    } else {
      config = await this._http.get('./assets/config-dev.properties', { responseType: 'text' }).toPromise();
    }
    const properties = this.parseProperties(config);
    this.SPREAD_SHEET_ID = properties[property];
    if (this.SPREAD_SHEET_ID) {
      return this.SPREAD_SHEET_ID;
    }
    throw new Error("SPREAD_SHEET_ID is undefined");
  }

  async updateConfig(newSpreadSheetId: string, property: string) : Promise<string> {
    var config: any;
    if (environment.production) {
      config = await this._http.get('./assets/config.properties', { responseType: 'text' }).toPromise();
    } else {
      config = await this._http.get('./assets/config-dev.properties', { responseType: 'text' }).toPromise();
    }
    let properties = this.parseProperties(config);
    properties[property] = newSpreadSheetId;
    const updatedConfig = this.stringifyProperties(properties);
    if (environment.production) {
      this.SPREAD_SHEET_ID = await this._http.post('./assets/config.properties', { updatedConfig }, { responseType: 'text' }).toPromise();
    } else {
      this.SPREAD_SHEET_ID = await this._http.post('./assets/config-dev.properties', { updatedConfig }, { responseType: 'text' }).toPromise();
    }
    this.SPREAD_SHEET_ID = newSpreadSheetId;
    if (this.SPREAD_SHEET_ID) {
      return this.SPREAD_SHEET_ID;
    }
    throw new Error("SPREAD_SHEET_ID is undefined");
  }

  private parseProperties(properties: string): any {
    return properties.split('\n').reduce((acc: { [key: string]: string }, line) => {
      const [key, value] = line.split('=');
      acc[key.trim()] = value.trim();
      return acc;
    }, {});
  }

  private stringifyProperties(properties: { [key: string]: string }): string {
    return Object.entries(properties).map(([key, value]) => `${key}=${value}`).join('\n');
  }

  setSpreadSheetId(id: string) {
    this.SPREAD_SHEET_ID = id;
  }

  /**
   *
   * @param table sheet name e.g. 'Casa'
   * @returns json of sheet
   */
  getEntities(table: string) {
    const url =
      this.BASE_URL + `?spreadsheetId=${this.SPREAD_SHEET_ID}&sheet=${table}`;
      // this.BASE_URL + `?sheetId=${this.SPREAD_SHEET_ID}&sheetName=${table}`;
    // console.log(url);
    return this._http.get(url, { responseType: "json" });
  }

  /**
   *
   * @param table sheet name e.g. 'Casa'
   * @returns json of sheet
   */
  getMaxId(table: string, id: string) {
    const url =
      this.BASE_URL + `?spreadsheetId=${this.SPREAD_SHEET_ID}&sheet=${table}&sheetMaxId=${id}`;
      // this.BASE_URL + `?sheetId=${this.SPREAD_SHEET_ID}&sheetName=${table}`;
    // console.log(url);
    return this._http.get(url, { responseType: "json" });
  }

  /**
   *
   * @param table sheet name e.g. 'Casa'
   * @param range range of sheet e.g. A1:Z100
   * @returns json of sheet
   */
  getEntitiesByRange(table: string, range: string) {
    const url =
      // this.BASE_URL + `?spreadsheetId=${this.SPREAD_SHEET_ID}&sheet=${table}`;
      this.BASE_URL + `?spreadsheetId=${this.SPREAD_SHEET_ID}&sheet=${table}&sheetRange=${range}`;
    // console.log(url);
    return this._http.get(url, { responseType: "json" });
  }

  saveEntities(table: string, rows: any) {
    // console.log(this.BASE_URL);
    let body: BodySaving = {};
    body.spreadsheet_id = this.SPREAD_SHEET_ID;
    body.sheet = table;
    body.rows = rows;
    // console.log(JSON.stringify(body));
    return this._http.post(this.BASE_URL, JSON.stringify(body));
  }

  saveEntitiesArray(bodytable: BodyTables[]) {
    // console.log(this.BASE_URL);
    let bodiesSaving: BodiesSaving = {};
    bodiesSaving.tables = [];
    bodytable.forEach(data => {
      let body: BodySaving = {};
      body.spreadsheet_id = this.SPREAD_SHEET_ID;
      body.sheet = data.table;
      body.rows = data.rows;
      bodiesSaving.tables?.push(body);
    });
    console.debug(JSON.stringify(bodiesSaving));
    return this._http.post(this.BASE_URL, JSON.stringify(bodiesSaving));
  }

  sendEmail(_info: any, _Detail: any[]) {
    let bodySend: SendEmail = {};
    bodySend.sendEmail = true;
    bodySend.info = _info;
    bodySend.Detail = _Detail;
    console.debug(bodySend);
    return this._http.post(this.BASE_URL, JSON.stringify(bodySend));
  }

    /**
   * Función privada para manejar errores HTTP.
   * @param error El error HTTP.
   * @returns Observable<never> Un Observable que emite un error.
   */
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido del cliente.';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente o de la red.
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // El backend devolvió un código de respuesta no exitoso.
      // El cuerpo de la respuesta puede contener pistas sobre lo que salió mal.
      errorMessage = `Código de error del servidor: ${error.status}, cuerpo: ${error.error}`;
    }
    console.error('Error en la petición HTTP:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}

export interface SendEmail {
  sendEmail?: boolean;
  info?: any;
  Detail?: any[];
}
