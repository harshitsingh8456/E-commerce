import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'data-type';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seller-product',
  templateUrl: './seller-product.component.html',
  styleUrls: ['./seller-product.component.css']
})
export class SellerProductComponent implements OnInit {

  constructor(
    private products: ProductService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  productForm = (data:product)=>{
    console.log(data)
    this.products.addProduct(data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.toastr.success('Product Added Succesfully');
        this.router.navigate(['/seller/home'])
      }
    })

  }

}
