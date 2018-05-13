import {Routes} from '@angular/router';
import {LoginComponent} from '../component/security/login/login.component';
import {ResetPasswordComponent} from '../component/security/reset-password/reset-password.component';
import {DashboardComponent} from '../component/dashboard/dashboard/dashboard.component';
import {SettingsComponent} from '../component/settings/settings/settings.component';
import {BuyingComponent} from '../component/buying-selling/buying/buying.component';
import {SellingComponent} from '../component/buying-selling/selling/selling.component';

export const routers: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'reset-password' , component: ResetPasswordComponent},
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'buying' , component: BuyingComponent},
  {path: 'selling' , component: SellingComponent},
  {path: 'settings' , component: SettingsComponent},
  ];
