import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeCardReportComponent } from './recharge-card-report.component';

describe('RechargeCardReportComponent', () => {
  let component: RechargeCardReportComponent;
  let fixture: ComponentFixture<RechargeCardReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeCardReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeCardReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
