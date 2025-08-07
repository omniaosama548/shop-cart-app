import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrl: './shipping-address.component.css'
})
export class ShippingAddressComponent {
  orderServ=inject(OrderService)
  royterService=inject(Router)
ShippingAddressForm=new FormGroup({
  details:new FormControl('',Validators.required),
  phone:new FormControl('',Validators.required),
  city:new FormControl('',Validators.required)
})
redirectToUrl(url:any){
  window.location.href=url;
}
@Input() id!:string
@Input() type!:string
onlinePayment(){
  if(this.type=="cash"){
     this.orderServ.createCashOrder(this.ShippingAddressForm.value,this.id).subscribe({
  next:(response)=>{console.log(response)
    this.royterService.navigate(['/allorders'])
  },
  error:(err)=>{console.log(err)
     this.royterService.navigate(['/cart'])
  }
})
  }
  else if(this.type=="card"){
    this.orderServ.checkoutSession(this.ShippingAddressForm.value,this.id).subscribe({
  next:(response)=>{console.log(response)
    this.redirectToUrl(response.session.url)
  },
  error:(err)=>{console.log(err)}
})
  }
}
}
