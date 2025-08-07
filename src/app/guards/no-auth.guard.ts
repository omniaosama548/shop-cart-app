import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noAuthGuard: CanActivateFn = (route, state) => {
  let rout=inject(Router);
    if (!localStorage.getItem('token')) {
      return true;
    } else {
      rout.navigate(['/home']);
      return false;
    }
};
