import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../interfaces/address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl:string = "https://ecommerce.routemisr.com" 
  
  header:any = {

    token: localStorage.getItem("EcommerceUserToken")

  }

  constructor(private _httpClient:HttpClient){}


  checkout(id:string,data:Address):Observable<any>{

     return this._httpClient.post(`${this.baseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,data,
      {
        headers:this.header
      }
    )
  }

  
}
