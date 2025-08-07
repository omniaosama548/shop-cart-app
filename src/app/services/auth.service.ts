import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isloggedIn=new BehaviorSubject<boolean>(localStorage.getItem('token') ? true : false);
  constructor(private httpClient:HttpClient,private router: Router) { }
  signUp(registerObj:any):Observable<any>{
   return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",registerObj)
}
login(loginObj:any):Observable<any>{
  return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",loginObj)

}
currentUserNameSubject=new BehaviorSubject<string|null>(this.getCurrentUserNamr())
getCurrentUserNamr(){
  let token=localStorage.getItem("token")
  if(token){
    let decodedToken:any=jwtDecode(token)
    return decodedToken.name;
  }
  return null;
}
logout(){
  localStorage.removeItem('token');
 this.router.navigate(['/login']);
 this.isloggedIn.next(false);
 this.currentUserNameSubject.next(null)
}
Forgetpassword(forgetObj:any):Observable<any>{
  return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",forgetObj)
}
VerifyCode(resetCode:any):Observable<any>{
  return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",resetCode)
}
ResetPassword(resetObj:any):Observable<any>{
  return this.httpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",resetObj)
}
changePassword(formObj:any):Observable<any>{
  return this.httpClient.put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",formObj)
}
updateProfile(data: any): Observable<any> {

  return this.httpClient.put(
    'https://ecommerce.routemisr.com/api/v1/users/updateMe/',
    data);
}
}
