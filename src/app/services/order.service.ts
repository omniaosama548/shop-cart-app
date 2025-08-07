import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
 checkoutSession(form:any,cartId:string):Observable<any>{
return this.http.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,{
  shippingAddress:form})
 }
 //get user orders
 getUserOrders(cartOwner:string):Observable<any>{
  return this.http.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${cartOwner}`)
 }
 //online cash
 createCashOrder(form:any,cartId:string):Observable<any>{
  return this.http.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,{
    shippingAddress:form
  })
 }
}
