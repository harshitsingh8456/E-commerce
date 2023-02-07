import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { cart, product } from 'data-type';
import { ActivatedRoute } from '@angular/router';
import { filter,map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  getDetails: any;
  getId: any
  getProductValue: number = 1;
  value : any
  removeCart:boolean = false

  constructor(
    private product: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.getId)
    this.getId && this.product.getProduct(this.getId).subscribe((result)=>{
      // console.log(result);
      this.getDetails = result
      console.log(this.getDetails)



      // let cartData = localStorage.getItem('localCart');
      // if(this.getId && cartData){
      //     let items = JSON.parse(cartData);
      //     items.filter((item:product)=>   this.getId == item.id.toString())
      //     if(items.length){
      //       this.removeCart = true
      //     }
      //     else this.removeCart = false
      // }
      let user = localStorage.getItem('user');
      if(user){
        let userId = user && JSON.parse(user)[0].id;
        this.product.getCartList(userId);
        this.product.cartData.subscribe((result)=>{
          let items = result.filter((item:product)=>{
            this.getId.toString() === item.product_id?.toString()
          })
        })

      }
    })
    // for(let data of this.getDetails){
    //   console.log(data);
    // }
  }

  getQuantity(data:any){
    this.value = data
    this.getProductValue = data.value
    this.addToCart();
    console.log(this.getProductValue);
  }


  async addToCart(){
    if(this.getDetails){
      this.getDetails.value = this.getProductValue
      if(!localStorage.getItem('user')){
        await this.product.localAddToCart(this.getDetails)
        console.log(this.getDetails);
        // this.removeCart = true
        this.toastr.success('Product Added to Cart')

      }
      else{
        console.log('else');
        let user = localStorage.getItem('user');
        let userId = user && JSON.parse(user)[0].id;
        console.log(userId);
        let cartData:cart = {
          ...this.getDetails,
          userId,
          product_id:this.getDetails.id
        }
        delete cartData.id
        console.log(cartData);
        this.product.addToCart(cartData).subscribe((result)=>{
          if(result){
            this.product.getCartList(userId)
            this.toastr.success('Product Added to cart Succesfully')
          }
        })

      }

    }
  }

  removeToCart(getId: any) {

  }



}
