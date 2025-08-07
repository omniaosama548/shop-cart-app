import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../Interface/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnChanges{
constructor(private activitedRoute:ActivatedRoute,private cartServ:CartService,private productService:ProductService){}
addProTocart(id:string){
this.cartServ.addToCart(id).subscribe({
  next:(res)=>{
console.log(res.data)
this.cartServ.NumOfCartItemsSubject.next(res.numOfCartItems)
  }
})
}
productID :string|null=null;
productDetails:Product|null=null
@Input() id!:string|null;
  // ngOnInit(): void {
  //   this.activitedRoute.paramMap.subscribe({
  //     next:(params)=>{
  //       this.productID=params.get('id')
  //       this.productService.getProductById(this.productID).subscribe({
  //         next:(res)=>{
  //           console.log(res)
  //           this.productDetails=res.data;
  //         }
  //       })
  //     }
  //   })
  // }
   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
 ngOnChanges(changes: SimpleChanges): void {
if(this.id!=null&&changes['id'].previousValue!=changes['id'].currentValue){
     this.productService.getProductById(this.id).subscribe({
    next:(res)=>{
      this.productDetails=res.data
    }
   })
}
  }
}
