import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerHeaderComponent } from './seller-header/seller-header.component';
import { SellerProductComponent } from './seller-product/seller-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { SearchResultComponent } from './search-result/search-result.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SellerLoginComponent,
    HomeComponent,
    SellerSignupComponent,
    SellerHomeComponent,
    SellerHeaderComponent,
    SellerProductComponent,
    SellerUpdateProductComponent,
    FooterComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
