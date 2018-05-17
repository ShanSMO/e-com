import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SecurityModule} from './component/security/security.module';
import {DashboardModule} from './component/dashboard/dashboard.module';
import {RouterModule} from '@angular/router';
import {routers} from './route/const';
import {BuyingSellingModule} from './component/buying-selling/buying-selling.module';
import {SettingsModule} from './component/settings/settings.module';
import {HttpClientModule} from '@angular/common/http';
import {SideNavigationModule} from './component/common/side-navigation/side-navigation.module';
import {LayoutModule} from './component/layout/layout.module';
import {ConfigurationModule} from "./component/configuration/configuration.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers),
    SecurityModule,
    DashboardModule,
    BuyingSellingModule,
    SettingsModule,
    HttpClientModule,
    SideNavigationModule,
    LayoutModule,
    ConfigurationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
