import { Component, OnInit } from '@angular/core';
import { cart, orderSummary, priceSummary } from 'data-type';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  openPayment:boolean = false;
  cartData: undefined | cart[]
  priceSummary:priceSummary={
    product_price:0,
    price:0,
    discount:0,
    delivery:0,
    tax:0,
    total:0
  }
  cartData_Number:number = 0;
  totalPrice:number = 0;
  allData:any;

  constructor(
    private toastr: ToastrService,
    private product : ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.product.getProductCart().subscribe((response)=>{
      console.log(response);
      this.cartData = response
      this.cartData_Number = this.cartData.length;
      let price = 0;
      let product = 0;
      response.forEach((item)=>{
        price = price+(+item.price* + item.value!)
        product = price*item.value!
        this.priceSummary.product_price = product
      })
      this.priceSummary.price = price,
      this.priceSummary.discount = price/10,
      this.priceSummary.tax = price/10,
      this.priceSummary.delivery = 100,
      this.priceSummary.total = this.priceSummary.price + this.priceSummary.tax - this.priceSummary.discount + this.priceSummary.delivery;
      console.log(this.priceSummary.total);
      this.totalPrice = this.priceSummary.total;
      console.log(this.priceSummary);

    })
  }

  card(){
    this.openPayment = true;
  }


  checkoutPage(data:orderSummary){
    console.log(data);
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user)[0].id
    console.log(userId, JSON.parse(user!));

    this.cartData?.forEach((cartData) => {
      this.allData = cartData
    })
    console.log(this.allData);


    if(this.totalPrice){
      let cartData = {
        ...data,
        totalPrice : this.totalPrice,
        userId,
        image : this.allData.image,
        product: this.allData.product,
        price: this.allData.price

      }
      console.log(cartData);

      this.cartData?.forEach((element:any)=>{
        setTimeout(() => {
          this.product.deleteCartItem(element.id)
        }, 600);
      })
      this.product.totalOrders(cartData).subscribe((result) => {
        if(result){

          console.log(result);
          this.toastr.success("Order Placed Successfully")
          setTimeout(() => {
            this.router.navigate(['/user/orders'])
          }, 4000);
        }
      })

    }
  }
  redeem(){
    this.toastr.error('This Redeem code is invalid')
  }

}
