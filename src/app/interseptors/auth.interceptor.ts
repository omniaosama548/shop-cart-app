import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
 let token=localStorage.getItem("token");
 if(token !=null){
  let clonedReq=req.clone({
    headers:req.headers.set("token",token)
  })
  return next(clonedReq)
 }
  return next(req);
};
