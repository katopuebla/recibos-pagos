import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GastosPage } from './gastos.page';

describe('GastosPage', () => {
  let component: GastosPage;
  let fixture: ComponentFixture<GastosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GastosPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
