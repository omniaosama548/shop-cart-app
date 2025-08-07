import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  NumOfCartItemsSubject=new BehaviorSubject<number>(0);
  constructor(private http:HttpClient) { }
  headers:any={token:localStorage.getItem("token")}
addToCart(id:string):Observable<any>{
return this.http.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:id}
)
}
//get cart of user
getProdCart():Observable<any>{
return this.http.get("https://ecommerce.routemisr.com/api/v1/cart")
}
updateCountofProduct(id:string,count:number):Observable<any>{
  return this.http.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count:count})
}
//remove all items
removeAll():Observable<any>{
return this.http.delete("https://ecommerce.routemisr.com/api/v1/cart"
)
}
//delete item
deleteProduct(id:string|null):Observable<any>{
return this.http.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`
)
}
getUpdatedCartItemsNumber(){
  this.getProdCart().subscribe({
    next:(response)=>{
      this.NumOfCartItemsSubject.next(response.numOfCartItems)
    }
  })
}

}
