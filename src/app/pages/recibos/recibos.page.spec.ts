import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecibosPage } from './recibos.page';
import { FolioComponentModule } from 'src/app/components/folio/folio.module';
import { MesesComponentModule } from 'src/app/components/meses/meses.module';
import { MesComponentModule } from 'src/app/components/mes/mes.module';

describe('RecibosPage', () => {
  let component: RecibosPage;
  let fixture: ComponentFixture<RecibosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecibosPage],
      imports: [IonicModule.forRoot(), MesComponentModule, MesesComponentModule, FolioComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RecibosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
