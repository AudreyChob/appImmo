import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardVisiteComponent } from './card-visite.component';

describe('CardVisiteComponent', () => {
  let component: CardVisiteComponent;
  let fixture: ComponentFixture<CardVisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardVisiteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
