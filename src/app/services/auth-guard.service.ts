import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor(
    private route: Router
  ) { }


  isLoggedIn() {
    sessionStorage.setItem('isLoggedIn', 'true')
  }

  isLoggedOut() {
    this.route.navigateByUrl('login')
    sessionStorage.clear();
  }

  getLogginStatus(): boolean {
    if ( sessionStorage.getItem('isLoggedIn') === 'true') {
      return true
    } else {
      return false
    }
  }
}
