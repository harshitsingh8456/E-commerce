import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'data-type';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-seller-product',
  templateUrl: './seller-product.component.html',
  styleUrls: ['./seller-product.component.css']
})
export class SellerProductComponent implements OnInit {

  constructor(
    private products: ProductService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  productForm = (data:product)=>{
    console.log(data)
    this.products.addProduct(data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.toastr.success('Product Added Succesfully')
      }
    })

  }

}
