import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from 'data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(data:product) {
    // console.log('Api called',data)
    return this.http.post('http://localhost:3000/product',data)
  }
  productList(){
    return this.http.get<product[]>('http://localhost:3000/product')
  }
  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/product/${id}`)
  }
}
