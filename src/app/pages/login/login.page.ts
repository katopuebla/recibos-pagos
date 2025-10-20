import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  public fields: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private service: UserService, private alert: AlertController
  ) {
    this.fields = this.formBuilder.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.service.getSpreadSheetId().then((data) => {
      console.log(data);
    });
  }

  onLogin(event: CustomEvent) {
    console.log(this.fields.value);
    if (this.fields.valid) {
      this.service.getUsers(this.fields.value.nombre, this.fields.value.password)
        .subscribe(async (data) => {
          if (data) {
            this.router.navigate(['/tabs/home']);
          }
          else {
            const alerta = await this.alert.create({
              message: 'Usuario o contraseña incorrecta',
              buttons: ['OK']
            });
            await alerta.present();
          }
        });
    }
  }

}
