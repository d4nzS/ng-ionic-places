import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserAuthenticated = false;

  getIsUserAuthenticated(): boolean {
    return this.isUserAuthenticated;
  }

  login(): void {
    this.isUserAuthenticated = true;
  }

  logout(): void {
    this.isUserAuthenticated = false;
  }
}
