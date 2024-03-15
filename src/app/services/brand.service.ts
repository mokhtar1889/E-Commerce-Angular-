import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  baseUrl:string = "https://ecommerce.routemisr.com"

  constructor(private _httpClient:HttpClient){}

  getAllBrands():Observable<any>{
    return this._httpClient.get(`${this.baseUrl}/api/v1/brands`)
  }

  getSpecificBrand(id:string):Observable<any>{
    return this._httpClient.get(`${this.baseUrl}/api/v1/brands/${id}`)

  }
}
