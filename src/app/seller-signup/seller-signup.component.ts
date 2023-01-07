import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { signUp } from 'data-Type';
// import { signUp } from '../data-type';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css']
})
export class SellerSignupComponent implements OnInit {

  constructor( private seller : SellerService,
    private router: Router,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
  }


  openLogin(){
    this.router.navigate(['seller/login'])
  }

  SignupForm =(data:signUp)=>{
    console.log(data)
    this.seller.userSignup(data)
    // .subscribe((result)=>{
    //   console.log(result)
    //   if(result){
    //     this.router.navigate(['/seller-home'])
    //   }
    // })
  }

}
