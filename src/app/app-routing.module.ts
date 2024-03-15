import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { authGuard } from './auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:"" , redirectTo:"Home",pathMatch:"full"},
  {path:"Home",canActivate:[authGuard],component:HomeComponent,title:"Home"},
  {path:"wishList",canActivate:[authGuard],component:WishListComponent,title:"wishList"},
  {path:"Products",canActivate:[authGuard],component:ProductsComponent,title:"Products"},
  {path:"Categories",canActivate:[authGuard],component:CategoriesComponent,title:"Categories"},
  {path:"Brands",canActivate:[authGuard],component:BrandsComponent,title:"Brands"},
  {path:"SignIn",component:LoginComponent,title:"SignIn"},
  {path:"SignIn/ForgetPassword",component:ForgetPasswordComponent,title:"ForgetPassword"},
  {path:"SignIn/verifyCode",component:VerifyCodeComponent,title:"VerifyCode"},
  {path:"SignIn/resetPassword",component:ResetPasswordComponent,title:"ResetPassword"},
  {path:"SignOut",component:RegisterComponent , title:"register"},
  {path:"ProductDetails/:id",canActivate:[authGuard],component:ProductDetailsComponent,title:"productDetails"},
  {path:"Cart",canActivate:[authGuard],component:CartComponent,title:"Cart"},
  {path:"Checkout/:cardId",canActivate:[authGuard],component:CheckoutComponent,title:"Checkout"},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
