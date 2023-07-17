import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthPage {
  constructor(private router: Router,
              private authService: AuthService) {
  }
  onLogin(): void {
    this.authService.login();
    this.router.navigate(['/']);
  }
}
