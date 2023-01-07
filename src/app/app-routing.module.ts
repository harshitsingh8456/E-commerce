import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { HomeComponent } from './home/home.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerProductComponent } from './seller-product/seller-product.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent

  },
  {
    path:'seller/login',
    component:SellerLoginComponent
  },
  {
    path:'seller/sign-up',
    component:SellerSignupComponent
  },
  {
    path:'seller/home',
    component:SellerHomeComponent
  },
  {
    path:'seller/products',
    component:SellerProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
