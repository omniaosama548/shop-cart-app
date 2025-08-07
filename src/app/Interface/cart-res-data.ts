import { CartResProducts } from "./cart-res-products";

export interface CartResData {
  cartOwner:string,
  products:CartResProducts[],
  totalCartPrice:number,
  _id:string
}
