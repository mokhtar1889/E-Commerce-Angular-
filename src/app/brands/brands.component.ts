import { Component } from '@angular/core';
import { BrandService } from '../services/brand.service';
import { Brand } from '../interfaces/brand';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {

  allBrands:Brand[] = []
  brands:Brand = {} as Brand ;
  constructor(private _brandService:BrandService){
    this.getAllBrands()

  }

  getAllBrands(){
    this._brandService.getAllBrands().subscribe({
      next:(res)=>{
        console.log(res);
        this.allBrands = res.data
        console.log(this.allBrands)
      }
    })
  }

  getBrand(id:string){
    this._brandService.getSpecificBrand(id).subscribe({
      next:(res)=>{
        this.brands = res.data
        console.log(res)
      }
    })
  }

}
