import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePartsReportComponent } from './phone-parts-report.component';

describe('PhonePartsReportComponent', () => {
  let component: PhonePartsReportComponent;
  let fixture: ComponentFixture<PhonePartsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonePartsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonePartsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
