import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BodySaving } from "../../interface/module";

@Injectable()
export class BaseService {
  BASE_URL =
    "https://script.google.com/macros/s/AKfycbycpIYrWv113Jd3yNGlGZ8RPEJLQSDsTVfdZ8cT9AdWR9fwm44/exec";
  SPREAD_SHEET_ID = "1dkH4nBPPto68a474N1cdIXtIjtpOAp3q3yQVUJc8JOQ";

  constructor(private _http: HttpClient) {}

  getUrlComponent(table: string) {
    const url =
      this.BASE_URL + `?spreadsheetId=${this.SPREAD_SHEET_ID}&sheet=${table}`;
    console.log(url);
    return this._http.get(url, { responseType: "json" });
  }

  saveEntities(table: string, rows: any) {
    const url =
      this.BASE_URL + `?spreadsheetId=${this.SPREAD_SHEET_ID}&sheet=${table}`;
    console.log(url);
    let body: BodySaving = {};
    body.spreadsheet_id = this.SPREAD_SHEET_ID;
    body.sheet = table;
    body.rows = rows;
    console.log(body);
    return this._http.post(url, body, { responseType: "json" });
  }
}
