import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { login } from 'data-type';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements OnInit {

  constructor(
    private seller : SellerService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  authError: string = '';
  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  openSignup(){
    this.router.navigate(['seller/sign-up'])
  }

  loginForm = (data:login)=>{
    this.authError = ""
    console.log(data)
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((error:any)=>{
      this.toastr.error('Email or Password in Not Correct')
      this.authError = "Email or Password in Not Correct"
    })
  }
}
