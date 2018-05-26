import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeCardsComponent } from './recharge-cards.component';

describe('RechargeCardsComponent', () => {
  let component: RechargeCardsComponent;
  let fixture: ComponentFixture<RechargeCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
