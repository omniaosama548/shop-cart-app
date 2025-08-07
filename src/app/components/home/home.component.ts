import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../Interface/product';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
constructor(private product:ProductService,private wishlistService: WishlistService) { }

  productList:Product[] = [];
  ngOnInit(): void {
     this.wishlistService.loadWishlist();
    this.product.getAllproducts().subscribe({
      next: (response) => {
        console.log(response);
        this.productList = response.data;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
      complete: () => {
        console.log('Product fetching completed');
      }
    })
  }


}
