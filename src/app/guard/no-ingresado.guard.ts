import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noIngresadoGuard: CanActivateFn = (route, state) => {
  if (!localStorage.getItem('user')) {
    return true;
  }
  const router = inject(Router);
  router.navigate(['/tabs/home']);
  return false;
};
