import { Category } from './../../Interface/category';

import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrl: './categories-slider.component.css'
})
export class CategoriesSliderComponent implements OnInit {
  proService=inject(ProductService)
  Categories:Category[]=[]
  customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
  rtl: true,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true
}
  ngOnInit(): void {
    this.proService.getAllCategories().subscribe({
      next:(res)=>{
     this.Categories=res.data
      }
    })
  }

}
