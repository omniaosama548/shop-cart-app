import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})
export class VerifyComponent {
  constructor(private auth:AuthService,private router:Router) { }
verifyObj:FormGroup=new FormGroup({
  resetCode:new FormControl("",Validators.required)
});
errorMassage:string="";
isLoading:boolean=false;

handleVerifyCode(){
  if(this.verifyObj.valid){
      this.isLoading=true;
      this.auth.VerifyCode(this.verifyObj.value).subscribe({
       next:(response)=>{
      this.isLoading=false;
       this.router.navigate(['/resetPassword']);
    }
      ,error:(err)=>{
        this.isLoading=false;
        this.errorMassage=err.error.message;
      }
})
  }

}}
