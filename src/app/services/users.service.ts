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
}
