import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  authenticateLogin(userdData) {
    if(userdData.username === 'ravi' && userdData.password == 'ravi123'){
      return true
    }else {
      return false;
    }
  }
}
