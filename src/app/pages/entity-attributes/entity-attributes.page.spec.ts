import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntityAttributesPage } from './entity-attributes.page';

describe('EntityAttributesPage', () => {
  let component: EntityAttributesPage;
  let fixture: ComponentFixture<EntityAttributesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityAttributesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntityAttributesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
