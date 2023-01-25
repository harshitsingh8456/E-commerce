export interface signUp {
  name: string;
  email: string;
  password: string
}
export interface login {
  email: string;
  password: string
}

export interface product {
  id:number,
  product: string,
  price_before:number,
  price: number,
  category: string,
  color: string,
  description: string,
  image: string,
  image1: string,
  image2: string,
  image3: string,
  value:undefined | any
  product_id:undefined | number
}
export interface cart {
  id:number | undefined,
  product: string,
  price_before:number,
  price: number,
  category: string,
  color: string,
  description: string,
  image: string,
  image1: string,
  image2: string,
  image3: string,
  value:undefined | number,
  userId: number,
  product_id:number
}
export interface priceSummary {
  product_price:number
  price:number,
  discount:number,
  delivery:number,
  tax:number,
  total:number
}
