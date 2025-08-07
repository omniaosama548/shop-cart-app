import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
orderServ=inject(OrderService);
cartServ=inject(CartService)
 token:any = localStorage.getItem('token');
  parseJwt(token:any) {
  const base64Url = token.split('.')[1];
  const base64 = decodeURIComponent(
    atob(base64Url)
      .split('')
      .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  );
  return JSON.parse(base64);
}
 payload :any=this.parseJwt(this.token);
 userId = this.payload.id;
 orders: any[] = [];
  ngOnInit(): void {
this.orderServ.getUserOrders(this.userId).subscribe({
  next:(response)=>{console.log(response)
     this.orders = response;
  },
  error:(error)=>{console.log(error)}
})
this.cartServ.getUpdatedCartItemsNumber()
}
}
