import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, login, product } from 'data-type';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../services/users.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private user : UsersService,
    private product : ProductService
  ) { }

  ngOnInit(): void {
    this.user.userReloadLogin();
  }

  loginForm(data:login){
    // console.log(data);
    this.user.userLogin(data);
    setTimeout(() => {
      this.localCartToRemoteCart()
      console.log(localStorage.getItem('user'));
    }, 1000);
    console.log('login Succesfully');
  }

  openSignup(){
    this.router.navigate(['user/sign-up'])
  }

  localCartToRemoteCart(){
    console.log(localStorage.getItem('user'));
    let data = localStorage.getItem('localCart')
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user)[0].id;
    if(data){
      let cartDataList:product[] =JSON.parse(data)


      cartDataList.forEach((product:any,index) => {
        let cartData:cart= {
          ...product,
          product_id:product.id,
          userId
        }
        delete cartData.id;
        setTimeout(() => {
          this.product.addToCart(cartData).subscribe((response)=>{
            console.log('product Added');
          })
          if(cartDataList.length === index+1){
            localStorage.removeItem('localCart')
          }
        }, 500);
      });
    }
    setTimeout(() => {
      this.product.getCartList(userId)
    }, 2000);
  }
}
