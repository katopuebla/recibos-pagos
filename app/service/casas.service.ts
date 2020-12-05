import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../interface/module";
import { BaseService } from "./base.service";

@Injectable()
export class CasasService {
  constructor(private base: BaseService) {}

  getFullData() {
    return this.base.getEntities("Recibos");
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
