import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  constructor(private auth:AuthService,private router:Router) { }
  isLoading:boolean=false;
  errorMassage:string="";
forgetPassword:FormGroup= new FormGroup(
  {email:new FormControl("",[Validators.required,Validators.email])
});
handleForgetPassword(){
if(this.forgetPassword.valid){
  this.isLoading=true;

  this.auth.Forgetpassword(this.forgetPassword.value).subscribe(
    {
      next:(response)=>{
        console.log(response);
        this.isLoading=false;
        this.router.navigate(['/verify']);
      },
      error:(err)=>{
        console.error(err);
        this.errorMassage=err.error.message;
        this.isLoading=false;
      },
    }
  )
}
}
}
