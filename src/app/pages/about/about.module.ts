import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';

import { AboutPageRoutingModule } from './about-routing.module';
import { UserAvatarComponent } from 'src/app/components/user-avatar/user-avatar.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AboutPageRoutingModule,
    UserAvatarComponent
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
