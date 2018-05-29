import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeCardStockComponent } from './recharge-card-stock.component';

describe('RechargeCardStockComponent', () => {
  let component: RechargeCardStockComponent;
  let fixture: ComponentFixture<RechargeCardStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeCardStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeCardStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
