import { CanDeactivateFn } from '@angular/router';
import { SignupComponent } from '../components/signup/signup.component';
import { LoginComponent } from '../components/login/login.component';

export const confirmsaveformGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  if(component instanceof SignupComponent) {
    if(component.signUpForm.dirty && !component.isSubmitted){
      return window.confirm("there are some changes not saved are you sure you want to leave?")
    }
  }
  return true;
};
