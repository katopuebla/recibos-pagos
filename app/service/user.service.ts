import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../interface/module";
import { BaseService } from "./base.service";

@Injectable()
export class UserService {
  constructor(private base: BaseService) {}

  getUsers() {
    return this.base.getUrlComponent("users");
  }

  saveUser(user: User) {
    let users: string[] = [];
    var value = `${user.id}, ${user.uername}, ${user.email}`;
    users.push(value);
    return this.base.saveEntities("users", users);
  }
}
