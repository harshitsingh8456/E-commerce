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

export interface orderSummary {
name:string,
email:string,
number:number,
address:string,
address1:string,
country:boolean
state:boolean,
zip:number,
same_address:boolean,
save_info:boolean,
paymentMethod:boolean,
totalPrice:number,
userId:number,
image : string,
product: string,
price: number
}
