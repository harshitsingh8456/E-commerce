import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-header',
  templateUrl: './seller-header.component.html',
  styleUrls: ['./seller-header.component.css']
})
export class SellerHeaderComponent implements OnInit {
  sellerName:string = "";

  constructor(private router : Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('seller')){
      let sellerStore = localStorage.getItem('seller');
      let sellerData = sellerStore && JSON.parse(sellerStore)[0];
      this.sellerName = sellerData.name
    }
  }


  logout(){
    localStorage.removeItem('seller');
    this.router.navigate(['/'])
  }
}

