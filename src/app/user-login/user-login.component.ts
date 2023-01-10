import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'data-type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  loginForm(data:login){
    console.log(data);

  }

  openSignup(){
    this.router.navigate(['user/sign-up'])
  }

}
