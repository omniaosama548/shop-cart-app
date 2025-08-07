import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loodingInterceptor: HttpInterceptorFn = (req, next) => {
  
   return next(req);
};
