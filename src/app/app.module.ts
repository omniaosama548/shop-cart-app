import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { CatogeriesComponent } from './components/catogeries/catogeries.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BrandComponent } from './components/brand/brand.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { VerifyComponent } from './components/verify/verify.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesSliderComponent } from './components/categories-slider/categories-slider.component';
import { authInterceptor } from './interseptors/auth.interceptor';
import { loodingInterceptor } from './interseptors/looding.interceptor';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { OrderComponent } from './components/order/order.component';
import { SearchPipe } from './Pipes/search.pipe';
import { BrandDetailsComponent } from './components/brand-details/brand-details.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    SignupComponent,
    CatogeriesComponent,
    FooterComponent,
    LoginComponent,
    NotfoundComponent,
    BrandComponent,
    ForgetPasswordComponent,
    VerifyComponent,
    ResetpasswordComponent,
    ProductComponent,
    ProductDetailsComponent,
    CategoriesSliderComponent,
    ShippingAddressComponent,
    OrderComponent,
    SearchPipe,
    BrandDetailsComponent,
    WishlistComponent,
    ProfileComponent,
    UpdateProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // Import FormsModule for template-driven forms
    FormsModule,
    // Import ReactiveFormsModule for reactive forms
    ReactiveFormsModule,
   BrowserAnimationsModule,
    CarouselModule,
    NgxSpinnerModule,
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor,loodingInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
