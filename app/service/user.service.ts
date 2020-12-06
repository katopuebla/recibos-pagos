import { Injectable } from "@angular/core";
import { User } from "../../interface/recibos";
import { BaseService } from "./base.service";

@Injectable()
export class UserService {
  constructor(private base: BaseService) {}

  getUsers() {
    return this.base.getEntities("users");
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
