import { inject, Injectable } from "@angular/core";
import { Usuario } from "../interface/recibos";
import { BaseService } from "./base.service";
import { map, Observable } from "rxjs";

@Injectable()
export class UserService {
    SPREAD_SHEET_ID: string | undefined;
    base = inject(BaseService);

    async getSpreadSheetId() {
      this.SPREAD_SHEET_ID = await this.base.loadConfig('CATALOGOS_SPREAD_SHEET_ID');
      return this.SPREAD_SHEET_ID;
    }
  
    async setSpreadSheetId(_spreadSheetId: string) {
      this.SPREAD_SHEET_ID = await this.base.updateConfig(_spreadSheetId, 'CATALOGOS_SPREAD_SHEET_ID');
      return this.SPREAD_SHEET_ID;
    }
  

  getUsers(nombre: string, password: string): Observable<string| null | undefined> {
    return this.base.getEntities("Usuarios").pipe(
      map((data: any) => {
        let users = data as Usuario[];
        let user = users.find((_user) => _user.ID === nombre && _user.PASSWORD === password);
        if(user) {
          user.PASSWORD = '';
          user.TELEFONO = '';
            localStorage.setItem('user', JSON.stringify(user));
            return user.NOMBRE;
        }
        return null;
      })
    );
  }

 /*  saveUser(user: User) {
    let users = this.getBody(user);
    let body: string[][] = [];
    body.push(users);
    return this.base.saveEntities("users", body);
  }

  private getBody(user: User | any) {
    let users: string[] = [];
    users.push("" + user.id);
    users.push(user.uername);
    users.push(user.email);
    return users;
  } */
}
