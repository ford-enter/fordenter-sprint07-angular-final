import { CanActivateFn, Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService =  inject(AuthserviceService);
  const router = inject(Router);

  if(authService.isLoggedIn()) {
    return true
  }

  
  return router.parseUrl('/');;
};
