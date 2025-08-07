import { Brand } from './../../Interface/brand';
import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit {
  BrandList:Brand[]=[]
constructor(private brandServ:BrandsService){}
  ngOnInit(): void {
   this.brandServ.getAllBrands().subscribe({
    next:(response)=>{console.log(response.data)
      this.BrandList=response.data;
    }
   })
  }

}
