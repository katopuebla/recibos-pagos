import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GastosPage } from './gastos.page';

import { GastosPageRoutingModule } from './gastos-routing.module';
import { GroupByPipe } from 'src/app/pipes/group-by.pipe';
import { UserAvatarComponent } from 'src/app/components/user-avatar/user-avatar.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GastosPageRoutingModule,
    GroupByPipe,
    UserAvatarComponent
  ],
  declarations: [GastosPage]
})
export class GastosPageModule {}
