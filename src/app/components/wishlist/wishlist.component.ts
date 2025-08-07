import { Component, inject, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { Product } from '../../Interface/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit{
wishList:Product[]=[]
cartServ=inject(CartService)
addProTocart(id:string){
this.cartServ.addToCart(id).subscribe({
  next:(res)=>{
console.log(res.data)
this.cartServ.NumOfCartItemsSubject.next(res.numOfCartItems)
  }
})
}
wishlistServ=inject( WishlistService);
  ngOnInit(): void {
  this.wishlistServ.getUserWishlist().subscribe({
    next:(res)=>{console.log(res.data)
      this.wishList=res.data;
    }
  })
}
removeFromWishlist(id: string): void {
  this.wishlistServ.removeProductToWishlist(id).subscribe({
    next: (response) => {
this.wishlistServ.getUserWishlist().subscribe({
    next:(res)=>{console.log(res.data)
      this.wishList=res.data;
    }
  })
      console.log(response)
    },
    error: (err) => {
      console.error('Failed to remove item from wishlist:', err);
    }
  });
}

}
