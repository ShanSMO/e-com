import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePhoneStockComponent } from './mobile-phone-stock.component';

describe('MobilePhoneStockComponent', () => {
  let component: MobilePhoneStockComponent;
  let fixture: ComponentFixture<MobilePhoneStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePhoneStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePhoneStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
