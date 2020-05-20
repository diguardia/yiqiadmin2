import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntityDetailPage } from './entity-detail.page';

describe('EntityDetailPage', () => {
  let component: EntityDetailPage;
  let fixture: ComponentFixture<EntityDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntityDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
