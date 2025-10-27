import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
// import { ParametersComponentModule } from 'src/app/components/parameters/parameters.module';
import { ParametersComponent } from '../../components/parameters/parameters.component';
import { UserAvatarComponent } from 'src/app/components/user-avatar/user-avatar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminPageRoutingModule,
    UserAvatarComponent
    // ParametersComponentModule
  ],
  declarations: [AdminPage, ParametersComponent]
})
export class AdminPageModule {}
