import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category, SubCategory } from '../interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  allCategories:Category[]=[] ;
  categoryId:string = ''
  subCategories:SubCategory[] = []
  categoryName:string = ''

  constructor(private _categoryService:CategoryService){
    this.getAllCategories()
  
  }


  getAllCategories(){

    this._categoryService.getAllCategories().subscribe({
      next:(res)=>{
        console.log(res);
        this.allCategories = res.data ;
      }
    })

  }

  getAllSubCategoryInSubcategory(categoryId:string , categoryName:string){
    this._categoryService.getAllSubCategoryInSubcategory(categoryId).subscribe({
      next:(res)=>{
        console.log(res.data)
        this.subCategories = res.data 
        console.log(this.subCategories)
        this.categoryName = categoryName
      }
    })
  }

}
