import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { login, signUp } from 'data-type';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  invalidUser:any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  userSignUp(users:signUp){
    console.log(users);
    this.http.post('http://localhost:3000/users',users , {observe : 'response'}).subscribe((result)=>{
      console.log(result);
      if(result){
        this.toastr.success('Account Created Successfully')
        localStorage.setItem('user',JSON.stringify(result.body))
        this.router.navigate(['']);

      }
    })

  }

  userReload() {
    if(localStorage.getItem('user')){
      this.router.navigate(['./'])
    }
  }

  userLogin(user:login){
    console.log(user);
    this.http.get(`http://localhost:3000/users?email=${user.email}&password=${user.password}`,{observe : 'response'})
    .subscribe((response:any)=>{
      console.log(response);
      if(response && response.body && response.body.length){
        this.toastr.success('Login Succesfully')
        console.log('user login');
        localStorage.setItem('user',JSON.stringify(response.body))
        this.router.navigate(['']);
      }
      else{
        this.invalidUser = response
        this.toastr.error('Email or Password is invalid')
      }
    })
  }

  userReloadLogin() {
    if(localStorage.getItem('user')){
      this.router.navigate(['./'])
    }
  }
}
