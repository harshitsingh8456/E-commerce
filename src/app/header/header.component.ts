import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ProductService } from '../services/product.service';
import { product } from 'data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuType:string ='deafult';
  searchResult:undefined | product[]

  constructor(private router : Router,
    private product: ProductService) { }

  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        console.log(val.url);
        if(localStorage.getItem('seller') && val.url.includes('seller')) {
          console.log('In Seller Area')
          this.menuType = 'seller'
        }
        else {
          console.log('Outsite Seller Area')
          this.menuType = 'deafult'
        }
      }
    })
  }

  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      console.log(element.value);
      this.product.searchProduct(element.value).subscribe((result)=>{
        console.log(result)
        this.searchResult = result
      })
    }
  }
  hideSearch(){
    this.searchResult = undefined
  }

  submitSearch(val:string){
    console.log(val);
    this.router.navigate([`/search/${val}`])

  }

}
