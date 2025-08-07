import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../Interface/product';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
productServ=inject(ProductService);
wishlistService=inject(WishlistService)
productList:Product[]=[]
searchTerm:string=''
ngOnInit(): void {
  this.wishlistService.loadWishlist();
this.productServ.getAllproducts().subscribe({
  next:(response)=>{this.productList=response.data}
})
}

}
