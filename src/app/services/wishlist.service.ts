import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlist = new Set<string>();
  wishlistChanged = new BehaviorSubject<Set<string>>(this.wishlist);

  constructor(private http: HttpClient) {}

  loadWishlist(): void {
    this.getUserWishlist().subscribe({
      next: (res) => {
        const ids = res.data.map((product: any) => product._id);
        this.wishlist = new Set(ids);
        this.wishlistChanged.next(this.wishlist);
      },
      error: (err) => {
        console.error('Wishlist load error:', err);
      }
    });
  }

  isInWishlist(id: string): boolean {
    return this.wishlist.has(id);
  }

  toggleWishlist(id: string): void {
    if (this.isInWishlist(id)) {
      this.removeProductToWishlist(id).subscribe({
        next: () => {
          this.wishlist.delete(id);
          this.wishlistChanged.next(this.wishlist);
        }
      });
    } else {
      this.addProductToWishlist(id).subscribe({
        next: () => {
          this.wishlist.add(id);
          this.wishlistChanged.next(this.wishlist);
        }
      });
    }
  }

  addProductToWishlist(id: string): Observable<any> {
    return this.http.post("https://ecommerce.routemisr.com/api/v1/wishlist", {
      productId: id
    });
  }

  removeProductToWishlist(id: string): Observable<any> {
    return this.http.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`);
  }

  getUserWishlist(): Observable<any> {
    return this.http.get("https://ecommerce.routemisr.com/api/v1/wishlist");
  }
}
