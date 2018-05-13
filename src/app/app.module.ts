import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SecurityModule} from './component/security/security.module';
import {DashboardModule} from './component/dashboard/dashboard.module';
import {RouterModule} from '@angular/router';
import {routers} from './route/const';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers),
    SecurityModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
