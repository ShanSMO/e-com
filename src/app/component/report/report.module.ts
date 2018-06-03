import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCopyReportComponent } from './photo-copy-report/photo-copy-report.component';
import { MobilePhoneReportComponent } from './mobile-phone-report/mobile-phone-report.component';
import { RechargeCardReportComponent } from './recharge-card-report/recharge-card-report.component';
import { PhonePartsReportComponent } from './phone-parts-report/phone-parts-report.component';
import { AccessoryReportComponent } from './accessory-report/accessory-report.component';
import { ReportComponent } from './report.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    PhotoCopyReportComponent,
    MobilePhoneReportComponent,
    RechargeCardReportComponent,
    PhonePartsReportComponent,
    AccessoryReportComponent,
    ReportComponent]
})
export class ReportModule { }
