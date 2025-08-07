import { CartResData } from "./cart-res-data";

export interface CartResponse {
  cartId:string,
  data:CartResData,
numOfCartItems:number,
status:string

}
