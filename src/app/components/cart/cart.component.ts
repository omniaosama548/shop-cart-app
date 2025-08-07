import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartResponse } from '../../Interface/cart-response';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(private router: Router){}
  cartServ=inject(CartService)
  cartDetails:CartResponse|null=null
  id:string|null=null
  ngOnInit(): void {
    this.cartServ.getProdCart().subscribe({
      next:(res)=>{
        console.log(res)
        this.cartDetails=res

      }
    })
  }
  deleteItemFromCart(id:string){
    this.cartServ.deleteProduct(id).subscribe({
      next:(res)=>{
        this.cartDetails=res;
        this.cartServ.NumOfCartItemsSubject.next(res.numOfCartItems)
      }
    })
  }
  goToHome(){
    this.router.navigate(['/'])
  }
  //update cart
  updateItem(id:string,count:number){
    this.cartServ.updateCountofProduct(id,count).subscribe({
      next:(res)=>{
         console.log(res)
         this.cartDetails=res
         this.cartServ.NumOfCartItemsSubject.next(res.numOfCartItems)
      },
      error:(err)=>{console.log(err)}
    })
  }
  //remove all
 clearItem() {
  this.cartServ.removeAll().subscribe({
    next: (res) => {
      if (this.cartDetails) {
        this.cartDetails.numOfCartItems = 0;
        this.cartServ.NumOfCartItemsSubject.next(0)
        if (this.cartDetails.data) {
          this.cartDetails.data.products = [];
          this.cartDetails.data.totalCartPrice = 0;
        }
      }
    },
    error: (err) => {
      console.error('Error clearing cart:', err);
    }
  });
}

}
