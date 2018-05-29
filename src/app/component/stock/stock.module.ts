import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import {RouterModule} from '@angular/router';
import { MobilePhoneStockComponent } from './mobile-phone-stock/mobile-phone-stock.component';
import { RechargeCardStockComponent } from './recharge-card-stock/recharge-card-stock.component';
import { PhonePartStockComponent } from './phone-part-stock/phone-part-stock.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    StockComponent,
    MobilePhoneStockComponent,
    RechargeCardStockComponent,
    PhonePartStockComponent,
    AccessoriesComponent
  ]
})
export class StockModule { }
