import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'data-type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productList : undefined | product[]

  constructor(
    private product: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.list()
  }

  deleteProduct = (id:number)=>{
    this.product.deleteProduct(id).subscribe((result)=>{
      console.log(result);
      if(result){
        this.toastr.success('Product Deleted Succesfully')
        this.list()
      }
    })
    console.log("test id",id)
  }

  list(){
    this.product.productList().subscribe((result)=>{
      console.log(result);
      this.productList = result
    })
  }
}
