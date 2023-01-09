import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'data-type';
import { ActivatedRoute } from '@angular/router';
import { filter,map } from 'rxjs/operators';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  getDetails: any;
  getId: any

  constructor(
    private product: ProductService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.getId)
    this.product.viewProduct(this.getId).subscribe((result)=>{
      // console.log(result);
      this.getDetails = result
      console.log(this.getDetails)
    })
    // for(let data of this.getDetails){
    //   console.log(data);
    // }
  }

}
