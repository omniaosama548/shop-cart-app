import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let rout=inject(Router);
  if (localStorage.getItem('token')) {
    return true;
  } else {
    rout.navigate(['/login']);
    return false;
  }
};
