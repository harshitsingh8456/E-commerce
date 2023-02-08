import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ProductService } from '../services/product.service';
import { product } from 'data-type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuType:string ='deafult';
  searchResult:undefined | product[]
  userName: string = '';
  cartNumber = 0;
  sellerName:string="";

  constructor(private router : Router,
    private product: ProductService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    // this.router.events.subscribe((val:any)=>{
    //   if(val.url){
    //     console.log(val.url);
    //      if(localStorage.getItem('user')){
    //       let userStore = localStorage.getItem('user');
    //       let userData = userStore && JSON.parse(userStore);
    //       this.userName = userData.name
    //       this.menuType = 'user';
    //       this.product.getCartList(userData.id)
    //     }
    //     else {
    //       console.log('Outsite Seller Area')
    //       this.menuType = 'deafult'
    //     }
    //   // }
    // // })


    // let cartData = localStorage.getItem('localCart');
    // if(cartData){
    //   this.cartNumber = JSON.parse(cartData).length
    // }

    // this.product.cartData.subscribe((response)=>{
    //   this.cartNumber = response.length
    // })



    // this.router.events.subscribe((val: any) => {

      // console.log(val.url.includes('seller'));

      // if (val.url) {
        console.log(window.location.href.indexOf("seller")> -1);
        if (localStorage.getItem('seller') && window.location.href.indexOf("seller")> -1) {
          console.log('seller already exists');
         let sellerStore=localStorage.getItem('seller');
         let sellerData =sellerStore && JSON.parse(sellerStore)[0];
         this.sellerName=sellerData.name;
          this.menuType = 'seller';
        }
         if(localStorage.getItem('user') && window.location.href.indexOf("seller")> -1 == false){
          console.log('user already exists');
          console.log('login');
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName= userData.name;
          this.menuType='user';
          this.product.getCartList(userData.id);
        }
        else if(!localStorage.getItem('user') || !localStorage.getItem('seller')){
          console.log('deafult');

            this.menuType = 'default';
        }
      // }
    // });
    let cartData= localStorage.getItem('localCart');
    if(cartData){
      this.cartNumber= JSON.parse(cartData).length
    }
    this.product.cartData.subscribe((items)=>{
      this.cartNumber= items.length
    })
  }

  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      console.log(element.value);
      this.product.searchProduct(element.value).subscribe((result)=>{
        console.log(result)
        this.searchResult = result
      })
    }
  }
  hideSearch(){
    this.searchResult = undefined
  }

  submitSearch(val:string){
    console.log(val);
    this.router.navigate([`/search/${val}`])

  }
  redirectToDetails(id:number){
    this.router.navigate(['/view/products/'+id])
  }
  logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['user/login'])
    this.product.cartData.emit([])
  }

  addToCart(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/user/add-to-cart'])
    }
    else{
      this.toastr.error('Please login');
      this.router.navigate(['user/login'])
    }
  }
}
