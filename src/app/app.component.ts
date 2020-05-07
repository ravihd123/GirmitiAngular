import { Component } from '@angular/core';
import { AuthGaurdService } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private authGaurd: AuthGaurdService
  ) {

  }

  isLoggedIn = false;

  showAfterLog() {
    return this.authGaurd.getLogginStatus();
  }

  logout() {
    this.authGaurd.isLoggedOut()
  }
}
