import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCopyReportComponent } from './photo-copy-report/photo-copy-report.component';
import { MobilePhoneReportComponent } from './mobile-phone-report/mobile-phone-report.component';
import { RechargeCardReportComponent } from './recharge-card-report/recharge-card-report.component';
import { PhonePartsReportComponent } from './phone-parts-report/phone-parts-report.component';
import { AccessoryReportComponent } from './accessory-report/accessory-report.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PhotoCopyReportComponent, MobilePhoneReportComponent, RechargeCardReportComponent, PhonePartsReportComponent, AccessoryReportComponent]
})
export class ReportModule { }
