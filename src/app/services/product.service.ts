import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl:string = "https://ecommerce.routemisr.com"

  constructor(private _httpClient:HttpClient){}


  getAllProducts():Observable<any>{

    return this._httpClient.get(`${this.baseUrl}/api/v1/products`)
    
  }

  getSpecificProduct(productId:string):Observable<any>{

    return this._httpClient.get(`${this.baseUrl}/api/v1/products/${productId}`)
  }
}
