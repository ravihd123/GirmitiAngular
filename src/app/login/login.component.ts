import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthGaurdService } from '../services/auth-guard.service';
import { ResourceService } from '../services/resource/resource.service';
import { LoginUiConfig } from './login-ui-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validLogin = true;
  loginUiConfig: LoginUiConfig = {};

  constructor(
    private formBuilder: FormBuilder,
    private loginservice: LoginService,
    private route: Router,
    private authGaurd: AuthGaurdService,
    private resourceConstant: ResourceService
  ) { }

  ngOnInit(): void {
    this.initResources()
    this.authGaurd.isLoggedOut()
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private initResources() {
    this.loginUiConfig = {
      username: this.resourceConstant.getConstValue('login.username.label'),
      password: this.resourceConstant.getConstValue('login.password.label'),
      errorLabel: this.resourceConstant.getConstValue('login.error.label'),
      submit: this.resourceConstant.getConstValue('login.submit.label'),
      clearLabel: this.resourceConstant.getConstValue('login.clear.label'),
      invalidCred: this.resourceConstant.getConstValue('login.invalidCred.label')
    }

  }

  onSubmit() {
    this.validLogin = this.loginservice.authenticateLogin(this.loginForm.value)
    if (this.validLogin) {
      this.authGaurd.isLoggedIn();
      this.route.navigateByUrl('dashboard')
    } else {
      // this.route.navigateByUrl('login')
    }

  }
  ClearLogin() {
    this.loginForm.reset();
    this.validLogin = true
  }

}
