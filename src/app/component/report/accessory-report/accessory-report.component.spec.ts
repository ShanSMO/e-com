import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryReportComponent } from './accessory-report.component';

describe('AccessoryReportComponent', () => {
  let component: AccessoryReportComponent;
  let fixture: ComponentFixture<AccessoryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
