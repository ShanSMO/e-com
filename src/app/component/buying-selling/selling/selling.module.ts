import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCopyComponent } from './photo-copy/photo-copy.component';
import { MobilePhoneComponent } from './mobile-phone/mobile-phone.component';
import { MobilePhoneAccessoryComponent } from './mobile-phone-accessory/mobile-phone-accessory.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PhotoCopyComponent, MobilePhoneComponent, MobilePhoneAccessoryComponent]
})
export class SellingModule { }
