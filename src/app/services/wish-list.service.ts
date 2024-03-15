import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  baseUrl:string = "https://ecommerce.routemisr.com"
  header:any = {
    token:localStorage.getItem("EcommerceUserToken")
  }

  constructor(private _httpClient:HttpClient){}


  addProduct(id:string):Observable<any>{
    let body = {
      productId : id
    }
    return this._httpClient.post(`${this.baseUrl}/api/v1/wishlist`,body,{
      headers:this.header
    })
  }

  removeProduct(id:string):Observable<any>{

     return this._httpClient.delete(`${this.baseUrl}/api/v1/wishlist/${id}`,{
      headers:this.header 
    })

  }

  getWishList():Observable<any>{

    return this._httpClient.get(`${this.baseUrl}/api/v1/wishlist`,{
      headers:this.header
    })
  }


}
