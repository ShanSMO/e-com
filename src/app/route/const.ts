import {Routes} from '@angular/router';
import {LoginComponent} from '../component/security/login/login.component';
import {ResetPasswordComponent} from '../component/security/reset-password/reset-password.component';
import {DashboardComponent} from '../component/dashboard/dashboard/dashboard.component';
import {SettingsComponent} from '../component/settings/settings/settings.component';
import {BuyingComponent} from '../component/buying-selling/buying/buying.component';
import {CommonLayoutComponent} from '../component/layout/common-layout/common-layout.component';
import {ProductSettingComponent} from '../component/configuration/product-setting/product-setting.component';
import {PhotoCopyComponent} from '../component/buying-selling/selling/photo-copy/photo-copy.component';

export const routers: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'reset-password' , component: ResetPasswordComponent},
  {path: '' , component: CommonLayoutComponent, children: [
      {path: 'dashboard' , component: DashboardComponent}
    ]},
  {path: 'buying' , component: BuyingComponent},
  {path: '' , component: CommonLayoutComponent, children: [
    {path: 'selling-photo-copy' , component: PhotoCopyComponent}
  ]},
  {path: '' , component: CommonLayoutComponent, children: [
    {path: 'product-setting' , component: ProductSettingComponent}
  ]},
  {path: 'settings' , component: SettingsComponent},
  ];
