import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCopyReportComponent } from './photo-copy-report.component';

describe('PhotoCopyReportComponent', () => {
  let component: PhotoCopyReportComponent;
  let fixture: ComponentFixture<PhotoCopyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoCopyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCopyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
