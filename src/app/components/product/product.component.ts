import { WishlistService } from './../../services/wishlist.service';
import { Component, inject, Input } from '@angular/core';
import { Product } from '../../Interface/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
@Input({required: true}) product !:Product;

cartServ=inject(CartService)

wishlistServ=inject(WishlistService)

toggleWishlist(id: string): void {
  this.wishlistServ.toggleWishlist(id);
}

isInWishlist(id: string): boolean {
  return this.wishlistServ.isInWishlist(id);
}
addProTocart(id:string){
this.cartServ.addToCart(id).subscribe({
  next:(res)=>{
console.log(res.data)
this.cartServ.NumOfCartItemsSubject.next(res.numOfCartItems)
  }
})
}
}
