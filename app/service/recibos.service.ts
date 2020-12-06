import { Injectable } from "@angular/core";
import { User } from "../../interface/recibos";
import { BaseService } from "./base.service";

@Injectable()
export class RecibosService {
  SPREAD_SHEET_ID = "1io4aQ7pdM0shvePwssrC7xSIwoVqEfWYlvgsXV5oKoo";
  constructor(private base: BaseService) {
    base.setSpreadSheetId(this.SPREAD_SHEET_ID);
  }

  getFullData() {
    return this.base.getEntities("Casas");
  }

  getFullDataDetail() {
    return this.base.getEntities("RecibosDetalle");
  }

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
  }
}
