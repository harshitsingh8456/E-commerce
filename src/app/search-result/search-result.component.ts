import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from 'data-type';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchResult: undefined | product[]
  NoData: boolean = false;
  pName:any

  constructor(
    private activatedRoute: ActivatedRoute,
    private product : ProductService
  ) { }

  ngOnInit(): void {
    let query = this.activatedRoute.snapshot.paramMap.get('query');
    this.pName = query

    console.log(query);
    query && this.product.searchProduct(query).subscribe((result)=>{
      this.searchResult = result
      console.log(this.searchResult);
      if(this.searchResult.length == 0){
        console.log('enter');
        this.NoData = true

      }
    })
  }

}
