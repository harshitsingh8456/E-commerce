import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'data-type';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private user : UsersService
  ) { }

  ngOnInit(): void {
    this.user.userReloadLogin();
  }

  loginForm(data:login){
    // console.log(data);
    this.user.userLogin(data);

  }

  openSignup(){
    this.router.navigate(['user/sign-up'])
  }

}
