import { Component, inject, Input, OnInit } from '@angular/core';
import { BrandsService } from '../../services/brands.service';
import { Brand } from '../../Interface/brand';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrl: './brand-details.component.css'
})
export class BrandDetailsComponent implements OnInit {
@Input()id:string='';
brand: Brand | null = null;
constructor(private brandServ:BrandsService){}
  ngOnInit(): void {
    this.brandServ.getBrandById(this.id).subscribe({
      next:(response)=>{console.log(response.data)
        this.brand=response.data
      }
    })
  }

}
