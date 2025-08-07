import { Brand } from "./brand";
import { Category } from "./category";
import { Subcategory } from "./subcategory";

export interface Product {
  sold?: number,
  images?:string[],
  subcategory?:Subcategory[],
  ratingsQuantity:number,
  _id:string,
  title:string,
  description?:string,
  quantity:number,
  price?:number,
  imageCover:string,
  category:Category,
  brand:Brand,
  ratingsAverage:number
}
