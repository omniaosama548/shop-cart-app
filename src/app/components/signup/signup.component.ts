import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { passwordMatch } from '../../custom validt/passwordMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnDestroy {
  constructor(private authService:AuthService,private router:Router) { }

  signUpForm: FormGroup = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),

    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),

    password: new FormControl("", [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)

    ]),

    rePassword: new FormControl("", [
      Validators.required

    ]),

    phone: new FormControl("", [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/)

    ]),
  },{validators:passwordMatch});
 errorMessage: string = "";
 isLoading: boolean = false;
 signUpSubscription!:Subscription;
 canDeActivate(){
    if(this.signUpForm.dirty && this.isSubmitted){
      return window.confirm("Are you sure you want to leave? Your changes will not be saved.");
    }
    return true;
  }
  isSubmitted: boolean = false;
  handleSignup() {
   if(this.signUpForm.valid){
    this.isLoading = true;
     this.signUpSubscription= this.authService.signUp(this.signUpForm.value).subscribe({
      next:(response)=>{
        this.isSubmitted = true;
        this.isLoading = false;
        console.log(response);
        this.router.navigate(['/login']);
      },
      error:(err)=>{console.log(err);
      this.isLoading = false;
      this.errorMessage = err.error.message;
      }
    });
   }
  }
   ngOnDestroy(): void {
this.signUpSubscription?.unsubscribe();
  }
}
