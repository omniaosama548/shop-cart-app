// @ts-ignore
import { Toast } from 'bootstrap';

import { Component, inject,ElementRef, ViewChild, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from '../../custom validt/passwordMatch';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
    @ViewChild('successToast', { static: false }) successToastRef!: ElementRef;
authServ=inject(AuthService)
changePasswordObj:FormGroup=new FormGroup({
  currentPassword:new FormControl("",Validators.required),
  password:new FormControl("",[Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)
]),
 rePassword:new FormControl("",[Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)
])
},{validators:passwordMatch})
 errorMessage: string = "";
 isLoading: boolean = false;
 handleChangePassword(){
  if(this.changePasswordObj.valid){
    this.isLoading = true;
    this.authServ.changePassword(this.changePasswordObj.value).subscribe({
     next:(res)=>{
      this.isLoading=false
      console.log(res)
       const toast = new Toast(this.successToastRef.nativeElement);
          toast.show();

        localStorage.setItem('token', res.token);
          this.changePasswordObj.reset();
     }, error:(err)=>{console.log(err);
      this.isLoading = false;
      this.errorMessage = err.error.message;
      }
    })
  }
 }
}
