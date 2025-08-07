// @ts-ignore
import { Toast } from 'bootstrap';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent {
  authServ = inject(AuthService);

  @ViewChild('successToast', { static: false }) successToastRef!: ElementRef;

  updateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)
    ]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  isLoading: boolean = false;
  errorMessage: string = '';

  handleUpdate() {
    if (this.updateForm.valid) {
      this.isLoading = true;
      this.authServ.updateProfile(this.updateForm.value).subscribe({
        next: () => {
          this.isLoading = false;
           const toast = new Toast(this.successToastRef.nativeElement);
          toast.show();
          this.updateForm.reset();
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMessage = err.error.message || 'Something went wrong.';
        }
      });
    }
  }
}
