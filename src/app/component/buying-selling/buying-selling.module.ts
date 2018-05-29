import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyingComponent } from './buying/buying.component';
import {SellingModule} from './selling/selling.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SellingModule,
    FormsModule
  ],
  declarations: [BuyingComponent]
})
export class BuyingSellingModule { }
