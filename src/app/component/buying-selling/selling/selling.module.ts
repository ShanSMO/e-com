import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCopyComponent } from './photo-copy/photo-copy.component';
import { MobilePhoneComponent } from './mobile-phone/mobile-phone.component';
import { MobilePhoneAccessoryComponent } from './mobile-phone-accessory/mobile-phone-accessory.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SellingComponent } from './selling.component';
import {RouterModule} from '@angular/router';
import { RechargeCardsComponent } from './recharge-cards/recharge-cards.component';
import { OtherAccessoriesComponent } from './other-accessories/other-accessories.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    PhotoCopyComponent,
    MobilePhoneComponent,
    MobilePhoneAccessoryComponent,
    SellingComponent,
    RechargeCardsComponent,
    OtherAccessoriesComponent]
})
export class SellingModule { }
