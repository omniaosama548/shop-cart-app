import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  getAllproducts():Observable<any> {
    return this.httpClient.get("https://ecommerce.routemisr.com/api/v1/products?limit=100");
  }
  getProductById(id:string|null):Observable<any>{
    return this.httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
   getAllCategories():Observable<any> {
    return this.httpClient.get("https://ecommerce.routemisr.com/api/v1/categories");
  }
}
