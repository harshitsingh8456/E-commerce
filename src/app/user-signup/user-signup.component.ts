import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signUp } from 'data-type';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private user : UsersService
  ) { }

  ngOnInit(): void {
    this.user.userReload()
  }

  SignupForm(data:signUp){
    console.log(data);
    this.user.userSignUp(data)

  }


  openLogin() {
    this.router.navigate(['/user/login'])
  }

}
