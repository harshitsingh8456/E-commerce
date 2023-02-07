import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { cart, priceSummary } from 'data-type';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  cartData: undefined | cart[]
  priceSummary:priceSummary={
    product_price:0,
    price:0,
    discount:0,
    delivery:0,
    tax:0,
    total:0
  }

  constructor(private product : ProductService) { }

  ngOnInit(): void {
    this.loadDetails()
  }

  removeToCart (cartId: number | undefined) {
    cartId && this.product.removeToCart(cartId)
    .subscribe((result)=>{
      this.loadDetails()
    })
  }

  loadDetails(){
    this.product.getProductCart().subscribe((response)=>{
      console.log(response);
      this.cartData = response
      let price = 0;
      let product = 0;
      response.forEach((item)=>{
        price = price+(+item.price* + item.value!)
        product = price*item.value!
        this.priceSummary.product_price = product
      })
      console.log(price);
      this.priceSummary.price = price,
      this.priceSummary.discount = price/10,
      this.priceSummary.tax = price/10,
      this.priceSummary.delivery = 100,
      this.priceSummary.total = this.priceSummary.price + this.priceSummary.tax - this.priceSummary.discount + this.priceSummary.delivery;
      console.log(this.priceSummary);

    })

  }
}
