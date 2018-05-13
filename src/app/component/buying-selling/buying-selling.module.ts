import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyingComponent } from './buying/buying.component';
import { SellingComponent } from './selling/selling.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BuyingComponent, SellingComponent]
})
export class BuyingSellingModule { }
