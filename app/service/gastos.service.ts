import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";

@Injectable()
export class GastosService {
  SPREAD_SHEET_ID = "1EvUSuqgS03fbq09SiRtoTXV5KwBgqoVXIH2QPbw5J1c";
  constructor(private base: BaseService) {
    base.setSpreadSheetId(this.SPREAD_SHEET_ID);
  }

  /* getFullData() {
    return this.base.getEntities("Casas");
  }*/

  getFullDataDetail() {
    return this.base.getEntities("GastosDetalle");
  }
  /*
  saveUser(user: User) {
    let users = this.getBody(user);
    let body: string[][] = [];
    body.push(users);
    return this.base.saveEntities("users", body);
  }

  private getBody(user: User) {
    let users: string[] = [];
    users.push("" + user.id);
    users.push(user.uername);
    users.push(user.email);
    return users;
  }*/
}
