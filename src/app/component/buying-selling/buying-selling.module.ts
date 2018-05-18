import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyingComponent } from './buying/buying.component';
import {SellingModule} from './selling/selling.module';

@NgModule({
  imports: [
    CommonModule,
    SellingModule
  ],
  declarations: [BuyingComponent]
})
export class BuyingSellingModule { }
