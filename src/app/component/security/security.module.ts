import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, ResetPasswordComponent]
})
export class SecurityModule { }
