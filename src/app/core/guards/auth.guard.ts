import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppUrls } from '../constants/app-urls';

export const authGuard: CanMatchFn = (): boolean | Promise<boolean> => {
  return inject(AuthService).getIsUserAuthenticated()
    || inject(Router).navigate(['/', AppUrls.AUTH]);
};
