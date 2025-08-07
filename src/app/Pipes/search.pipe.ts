import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Interface/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: Product[],term:string=''){
    return list.filter((product)=>{return product.title.toLowerCase().includes(term.toLowerCase())});
  }

}
