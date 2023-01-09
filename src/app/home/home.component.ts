import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { ProductService } from '../services/product.service';
import { product } from 'data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  popularProducts : undefined | product[]
  trendyProducts : undefined | product []
  popularProductsShop: boolean = true;
  trendyProductsShop: boolean = true;
  viewProductDetails: product[] | undefined

  constructor(config: NgbCarouselConfig,
    private product: ProductService,
    private router: Router,) {
    // customize default values of carousels used by this component tree
		config.interval = 3000;
		// config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
   }

  ngOnInit(): void {
    this.product.popularProducts().subscribe((response)=>{
      console.log(response);
      this.popularProducts = response
    })
    this.product.trendyProducts().subscribe((result)=>{
      console.log(result);
      this.trendyProducts = result
    })
  }

  openProduct(id:number){
    this.product.viewProduct(id)
    this.router.navigate([`/view-products/${id}`])
  }

}
