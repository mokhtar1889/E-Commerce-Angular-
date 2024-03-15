import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl:string = "https://ecommerce.routemisr.com"  

  constructor(private _httpClient:HttpClient){}
  
  getAllCategories():Observable<any>{
    return this._httpClient.get(`${this.baseUrl}/api/v1/categories`)

  }

  getAllSubCategoryInSubcategory(CategoryId:string):Observable<any>{

    return this._httpClient.get(`${this.baseUrl}/api/v1/categories/${CategoryId}/subcategories`)
  }



}
