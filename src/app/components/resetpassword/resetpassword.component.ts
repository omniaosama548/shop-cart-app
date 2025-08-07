import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {
constructor(private auth:AuthService,private router:Router) { }
resetForm:FormGroup=new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  newPassword:new FormControl("", [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)

      ])
});
errorMessage: string = "";
isLoading: boolean = false;
handleResetPassword() {
  // Reset the error message
  this.errorMessage = "";

  // Check if the form is valid before proceeding
if(this.resetForm.valid) {
  this.isLoading = true;
  this.auth.ResetPassword(this.resetForm.value).subscribe({
    next: (response) => {
      this.isLoading = false;
      console.log(response);
      localStorage.setItem('token', response.token);
      this.auth.isloggedIn.next(true); // Update the login status
      this.router.navigate(['/login']); // Navigate to the login page after successful reset
    },
    error: (err) => {
      this.isLoading = false;
      this.errorMessage = err.error.message || 'Login failed. Please try again.';
      console.error(err);
      // Handle login error, e.g., show an error message
    }
  });
}
}
}
