import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'data-type';
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
    })
    // for(let data of this.getDetails){
    //   console.log(data);
    // }
  }

  getQuantity(data:any){
    this.value = data
    this.getProductValue = data.value
    console.log(this.getProductValue);
  }


  addToCart(){
    // this.getQuantity(event)
    if(this.getDetails){
      this.getDetails.value = this.getProductValue
      if(!localStorage.getItem('user')){
        console.log(this.getDetails);
        this.product.localAddToCart(this.getDetails)
        // this.removeCart = true
        this.toastr.success('Product Added to Cart')

      }
      else{
        console.log('else');
      }

    }
  }

  removeToCart(getId: any) {

  }



}
