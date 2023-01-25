import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { cart, product } from 'data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cartData = new EventEmitter<product[] | []>();

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
  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/product/${id}`)
  }
  updateProduct(product:product){
    return this.http.put(`http://localhost:3000/product/${product.id}`,product)
  }
  popularProducts(){
    return this.http.get<product[]>('http://localhost:3000/product?_limit=5')
  }
  trendyProducts(){
    return this.http.get<product[]>('http://localhost:3000/product?_limit=10')
  }
  searchProduct(query:string) {
    return this.http.get<product[]>(`http://localhost:3000/product?q=${query}`)
  }
  viewProduct(id:number){
    return this.http.get(`http://localhost:3000/product/${id}`)
  }
  localAddToCart(data:product){
    let cartData = []
    let localCart = localStorage.getItem('localCart');
    if(!localCart){
      localStorage.setItem('localCart',JSON.stringify([data]));
      this.cartData.emit([data]);
    }
    else{
      console.log('else');
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart',JSON.stringify(cartData))

    }
    this.cartData.emit(cartData);
  }
  addToCart(cartData:cart){
    return this.http.post('http://localhost:3000/cart',cartData)
  }
  getCartList(userId:number){
    return this.http.get<product[]>('http://localhost:3000/cart?userId='+userId,{observe:'response'}).subscribe((response)=>{
      console.log(response);

      if(response && response.body){
        this.cartData.emit(response.body)
      }
    })

  }
  getProductCart(){
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    console.log(userData[0].id);

    return this.http.get<cart[]>('http://localhost:3000/cart?userId='+userData[0].id)
  }
}
