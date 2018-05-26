import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAccessoriesComponent } from './other-accessories.component';

describe('OtherAccessoriesComponent', () => {
  let component: OtherAccessoriesComponent;
  let fixture: ComponentFixture<OtherAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
