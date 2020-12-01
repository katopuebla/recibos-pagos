import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";

@Injectable()
export class UserService {
  constructor(private base: BaseService) {}

  getUsers() {
    return this.base.getUrlComponent("users");
  }
}
