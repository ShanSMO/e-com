import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import {RouterModule} from '@angular/router';
import {SideNavigationModule} from '../common/side-navigation/side-navigation.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SideNavigationModule
  ],
  declarations: [
    BlankLayoutComponent,
    CommonLayoutComponent
  ]
})
export class LayoutModule { }
