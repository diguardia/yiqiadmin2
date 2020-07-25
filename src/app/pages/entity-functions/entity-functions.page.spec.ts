import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntityFunctionsPage } from './entity-functions.page';

describe('EntityFunctionsPage', () => {
  let component: EntityFunctionsPage;
  let fixture: ComponentFixture<EntityFunctionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityFunctionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntityFunctionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
