import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validLogin = true;

  constructor(
    private formBuilder: FormBuilder,
    private loginservice: LoginService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.validLogin = this.loginservice.authenticateLogin(this.loginForm.value)
    if (this.validLogin) {
      this.route.navigateByUrl('service')
    } else {
      // this.route.navigateByUrl('login')

    }

  }
  ClearLogin() {

    this.loginForm.reset();
    this.validLogin = true
  }

}
