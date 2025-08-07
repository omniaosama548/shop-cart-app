import { AbstractControl,ValidationErrors } from "@angular/forms";
export function passwordMatch(signUpForm:AbstractControl):ValidationErrors | null {
  let password = signUpForm.value.password;
  let rePassword = signUpForm.value.rePassword;

  if (password!=rePassword) {
    return { passwordMismatch: true };
  }
  return null;
}
