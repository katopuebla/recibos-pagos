import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const ingresadoGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('user')) {
    return true;
  }
  const router = inject(Router);
  router.navigate(['/login']);
  return false;
};
