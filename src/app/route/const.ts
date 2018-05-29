import {Routes} from '@angular/router';
import {LoginComponent} from '../component/security/login/login.component';
import {ResetPasswordComponent} from '../component/security/reset-password/reset-password.component';
import {DashboardComponent} from '../component/dashboard/dashboard/dashboard.component';
import {SettingsComponent} from '../component/settings/settings/settings.component';
import {BuyingComponent} from '../component/buying-selling/buying/buying.component';
import {CommonLayoutComponent} from '../component/layout/common-layout/common-layout.component';
import {ProductSettingComponent} from '../component/configuration/product-setting/product-setting.component';
import {PhotoCopyComponent} from '../component/buying-selling/selling/photo-copy/photo-copy.component';
import {PhotoCopyReportComponent} from '../component/report/photo-copy-report/photo-copy-report.component';
import {SellingComponent} from '../component/buying-selling/selling/selling.component';
import {MobilePhoneAccessoryComponent} from '../component/buying-selling/selling/mobile-phone-accessory/mobile-phone-accessory.component';
import {MobilePhoneComponent} from '../component/buying-selling/selling/mobile-phone/mobile-phone.component';
import {RechargeCardsComponent} from '../component/buying-selling/selling/recharge-cards/recharge-cards.component';
import {OtherAccessoriesComponent} from '../component/buying-selling/selling/other-accessories/other-accessories.component';
import {StockComponent} from '../component/stock/stock.component';
import {MobilePhoneStockComponent} from '../component/stock/mobile-phone-stock/mobile-phone-stock.component';
import {RechargeCardStockComponent} from '../component/stock/recharge-card-stock/recharge-card-stock.component';
import {PhonePartStockComponent} from '../component/stock/phone-part-stock/phone-part-stock.component';
import {AccessoriesComponent} from '../component/stock/accessories/accessories.component';

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
  {path: '' , component: CommonLayoutComponent , children: [
    {path: 'report' , component: PhotoCopyReportComponent}
  ]},
  {path: '', component: CommonLayoutComponent, children: [
    {path: 'selling', component: SellingComponent, children: [
      {path: 'photo-copy', component: PhotoCopyComponent},
      {path: 'mobile-phone', component: MobilePhoneComponent},
      {path: 'phone-parts', component: MobilePhoneAccessoryComponent},
      {path: 'accessories', component: OtherAccessoriesComponent},
      {path: 'recharge-cards', component: RechargeCardsComponent},
    ]}
  ]},
  {path: '', component: CommonLayoutComponent, children: [
    {path: 'stock', component: StockComponent, children: [
      {path: 'mobile', component: MobilePhoneStockComponent},
      {path: 'phone-parts', component: PhonePartStockComponent},
      {path: 'recharge-cards', component: RechargeCardStockComponent},
      {path: 'accessories', component: AccessoriesComponent}
    ]}
  ]}

];
