import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { login, signUp } from 'data-Type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerSignup = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  userSignup = (data: signUp) => {
    console.log("Signup Api called")
    this.http.post('http://localhost:3000/seller', data, { observe: 'response' }).subscribe((result) => {
      console.log('result', result);
      this.isSellerSignup.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['/seller/home'])
    });
    return false
  }
  reloadSeller = ()=>{
    if(localStorage.getItem('seller')){
      this.isSellerSignup.next(true);
      this.router.navigate(['/seller/home'])
    }
  }

  userLogin = (data:login)=>{
    console.log(data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe : 'response'}).subscribe((result:any)=>{
      console.log(result);
      if(result && result.body && result.body.length){
        console.log('seller loged in');
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['/seller/home'])
      }
      else {
        console.log('seller login failed');
        // this.toastr.error('Wrong password or Username')
        this.isLoginError.emit(true)
      }
    })
  }
}
