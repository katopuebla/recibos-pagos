import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BodySaving } from "../../interface/module";

@Injectable()
export class BaseService {
  BASE_URL =
    "https://script.google.com/macros/s/AKfycbycpIYrWv113Jd3yNGlGZ8RPEJLQSDsTVfdZ8cT9AdWR9fwm44/exec";
  SPREAD_SHEET_ID: string;

  constructor(private _http: HttpClient) {}

  setSpreadSheetId(id: string) {
    this.SPREAD_SHEET_ID = id;
  }

  getEntities(table: string) {
    const url =
      this.BASE_URL + `?spreadsheetId=${this.SPREAD_SHEET_ID}&sheet=${table}`;
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
}
