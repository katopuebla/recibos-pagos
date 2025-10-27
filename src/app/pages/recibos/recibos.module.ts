import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecibosPage } from './recibos.page';
import { RecibosPageRoutingModule } from './recibos-routing.module';
import { MesComponentModule } from '../../components/mes/mes.module';
import { MesesComponentModule } from '../../components/meses/meses.module';
import { FolioComponentModule } from '../../components/folio/folio.module';
import { CasasComponentModule } from '../../components/casas/casas.module';
import { UserAvatarComponent } from 'src/app/components/user-avatar/user-avatar.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RecibosPageRoutingModule,
    MesComponentModule,
    MesesComponentModule,
    FolioComponentModule,
    CasasComponentModule,
    UserAvatarComponent
  ],
  declarations: [RecibosPage]
})
export class RecibosPageModule {}
