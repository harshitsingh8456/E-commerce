import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { ProductService } from '../services/product.service';
import { product } from 'data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  popularProducts : undefined | product[]

  constructor(config: NgbCarouselConfig,
    private product: ProductService) {
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
  }

}
