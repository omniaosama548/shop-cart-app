import { Product } from "./product";

export interface CartResProducts {
  count:number,
  price:number,
  product:Product,
  _id:string
}
