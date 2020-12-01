import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export abstract class BaseService {
  BASE_URL =
    "https://script.google.com/macros/s/AKfycbycpIYrWv113Jd3yNGlGZ8RPEJLQSDsTVfdZ8cT9AdWR9fwm44/exec";
  SPREAD_SHEET_ID = "1dkH4nBPPto68a474N1cdIXtIjtpOAp3q3yQVUJc8JOQ";

  constructor(private _http: HttpClient) {}

  getUrlComponent(table: string) {
    const url =
      this.BASE_URL + `?spreadsheetId=${this.SPREAD_SHEET_ID}&sheet=${table}`;
    return this._http.get(url, { responseType: "json" }).toPromise();
  }
}
