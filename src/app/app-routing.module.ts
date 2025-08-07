import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { CatogeriesComponent } from './components/catogeries/catogeries.component';
import { BrandComponent } from './components/brand/brand.component';
import { NgForm } from '@angular/forms';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { VerifyComponent } from './components/verify/verify.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { authGuard } from './guards/auth.guard';
import { noAuthGuard } from './guards/no-auth.guard';
import { confirmsaveformGuard } from './guards/confirmsaveform.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { OrderComponent } from './components/order/order.component';
import { BrandDetailsComponent } from './components/brand-details/brand-details.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
 {path:"home",canActivate:[authGuard], component: HomeComponent},
  {path:"profile",canActivate:[authGuard], component:ProfileComponent, children: [
      { path: 'update', canActivate:[authGuard],component: UpdateProfileComponent},
      { path: 'change-password',canActivate:[authGuard], component:ChangePasswordComponent}
    ]},
 {path:"login",canActivate:[noAuthGuard],component: LoginComponent},
 {path:"signup",component: SignupComponent},
 {path:"products",canActivate:[authGuard],component: ProductsComponent},
 {path:"cart",component: CartComponent},
 {path:"catogeries",component: CatogeriesComponent},
 {path:"brand",canActivate:[authGuard],component:BrandComponent},
 {path:"wishlist",canActivate:[authGuard],component:WishlistComponent},
  {path:"brand-details/:id",canActivate:[authGuard],component:BrandDetailsComponent},
 {path:"forgetPassword",canActivate:[noAuthGuard],component:ForgetPasswordComponent},
 {path:"verify",canActivate:[noAuthGuard],component:VerifyComponent},
 {path:"resetPassword",canActivate:[noAuthGuard],component:ResetpasswordComponent},
 {path:"product-details/:id",canActivate:[authGuard],component:ProductDetailsComponent},
{path:"shipping-address/:id/:type",component:ShippingAddressComponent},
{path:"allorders",component:OrderComponent},
 {path:"**",component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{bindToComponentInputs:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
