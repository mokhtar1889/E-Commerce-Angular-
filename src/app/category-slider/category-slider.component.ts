import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryService } from '../services/category.service';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent {

  allCategories:Category[]=[]


  constructor(private _categoryService:CategoryService){
    this.getCategoriesImages()
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 6
      }
    },
    nav: true
  }

  getCategoriesImages(){
    this._categoryService.getAllCategories().subscribe({
      next:(res)=>{
        this.allCategories = res.data
        console.log(this.allCategories)
      }
    })

  }

}
