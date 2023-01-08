import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { HomeComponent } from './home/home.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerProductComponent } from './seller-product/seller-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { AuthGuard } from './auth.guard';
import { SearchResultComponent } from './search-result/search-result.component';

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
    path:'search/:query',
    component:SearchResultComponent
  },
  {
    path:'seller/home',
    component:SellerHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'seller/products',
    component:SellerProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'seller/products/update/:id',
    component:SellerUpdateProductComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
