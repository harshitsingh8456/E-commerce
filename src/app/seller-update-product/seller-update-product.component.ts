import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { product } from 'data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  ProductData: undefined | product

  constructor(
    private route : ActivatedRoute,
    private products : ProductService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let product = this.route.snapshot.paramMap.get('id')
    console.log(product);
    product && this.products.getProduct(product).subscribe((result)=>{
      console.log(result);
      this.ProductData = result

    })

  }

  productForm = (data:product)=>{
    // console.log(data);
    if(this.ProductData){
      data.id = this.ProductData.id
    }
    this.products.updateProduct(data).subscribe((response)=>{
      console.log(response);
      if(response){
        this.toastr.success('Product Updated Succesfully');
        this.router.navigate(['/seller/home'])
      }
    })
  }

}
