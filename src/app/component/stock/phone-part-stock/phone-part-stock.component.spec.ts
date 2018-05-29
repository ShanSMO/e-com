import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePartStockComponent } from './phone-part-stock.component';

describe('PhonePartStockComponent', () => {
  let component: PhonePartStockComponent;
  let fixture: ComponentFixture<PhonePartStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonePartStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonePartStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
