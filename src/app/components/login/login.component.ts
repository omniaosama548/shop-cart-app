import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cartServ=inject(CartService)
constructor(private auth:AuthService,private router:Router) { }
LoginForm:FormGroup=new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("", [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)

      ])
});
isSubmitted: boolean = false;
 canDeActivate(){
    if(this.LoginForm.dirty && this.isSubmitted){
      return window.confirm("Are you sure you want to leave? Your changes will not be saved.");
    }
    return true; ;
  }
errorMessage: string = "";
isLoading: boolean = false;
handleLogin(){
if(this.LoginForm.valid) {
  this.isLoading = true;
  this.auth.login(this.LoginForm.value).subscribe({
    next: (response) => {
      this.isSubmitted = true;
      this.isLoading = false;
      console.log(response);
      localStorage.setItem('token', response.token);
      this.auth.isloggedIn.next(true); // Update the login status
      this.cartServ.getUpdatedCartItemsNumber();
      this.auth.currentUserNameSubject.next(response.user.name)
      this.router.navigate(['/home']);
    },
    error: (err) => {
      this.isLoading = false;
      this.errorMessage = err.error.message || 'Login failed. Please try again.';
      console.error(err);
      // Handle login error, e.g., show an error message
    }
  });
}
}}
