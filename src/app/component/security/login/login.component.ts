import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../service/authentication.service';
import {Router} from '@angular/router';
import {RouterUtil} from '../../../utils/router-util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new  FormGroup({
    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {

  }

  login() {
    const requestBody = {
      userName: this.loginForm.get('userName').value,
      password: this.loginForm.get('password').value
    };

    this.authenticationService.login(requestBody).subscribe(data => {
      if (data.status) {
        this.router.navigateByUrl(RouterUtil.DASHBOARD);
      }
    });
  }

}
