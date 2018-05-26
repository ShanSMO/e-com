import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePhoneReportComponent } from './mobile-phone-report.component';

describe('MobilePhoneReportComponent', () => {
  let component: MobilePhoneReportComponent;
  let fixture: ComponentFixture<MobilePhoneReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePhoneReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePhoneReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
