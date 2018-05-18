import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSettingComponent } from './product-setting/product-setting.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ProductSettingComponent]
})
export class ConfigurationModule { }
