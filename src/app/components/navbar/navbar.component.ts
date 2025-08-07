import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  numOfCartItems:number=0;
  constructor(private auth:AuthService,private cartService:CartService) { }
  isLoggedIn: boolean = false;
  currentUserName:string|null=null;
  ngOnInit(): void {
    this.auth.currentUserNameSubject.subscribe({
      next:(value)=>{this.currentUserName=value}
    })
    this.cartService.NumOfCartItemsSubject.subscribe({
      next:(value)=>{this.numOfCartItems=value}
    })
    this.cartService.getUpdatedCartItemsNumber();
    this.auth.isloggedIn.subscribe( {
     next:(value)=>{this.isLoggedIn = value;},
  })}
handleLogOut() {
  this.auth.logout();
  }
}
