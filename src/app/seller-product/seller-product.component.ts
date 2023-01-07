import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-product',
  templateUrl: './seller-product.component.html',
  styleUrls: ['./seller-product.component.css']
})
export class SellerProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productForm = (data:object)=>{
    console.log(data)
  }

}
