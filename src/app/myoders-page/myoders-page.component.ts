import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';
import { orderSummary } from 'data-type';

@Component({
  selector: 'app-myoders-page',
  templateUrl: './myoders-page.component.html',
  styleUrls: ['./myoders-page.component.css']
})
export class MyodersPageComponent implements OnInit {
  allProduct: undefined | any
  productData: any;
  Data:any[] =[]

  constructor(
    private toastr: ToastrService,
    private product : ProductService
  ) { }

  ngOnInit(): void {
    this.product.getProducts().subscribe((products) =>{
      this.Data = products;
      console.log(products);
    })

  }

}
