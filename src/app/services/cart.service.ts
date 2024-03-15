import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl:string = "https://ecommerce.routemisr.com"

  numOfCartItems:BehaviorSubject<number> = new BehaviorSubject(0);

  header:any ={
    token:localStorage.getItem("EcommerceUserToken")
  } 

  constructor(private _httpClient:HttpClient){
    this.getUserCart().subscribe({
      next:(res)=>{
        this.numOfCartItems.next(res.numOfCartItems)
      }
    })
  }


  addProductToCart(id:string):Observable<any>{

    let body = {
      productId : id 
    }

    return this._httpClient.post(`${this.baseUrl}/api/v1/cart`,body,{
      headers:this.header
    })
  }

  
  getUserCart():Observable<any>{

    return this._httpClient.get(`${this.baseUrl}/api/v1/cart`,{
      headers:this.header
    })

  }

  deleteCardItem(id:string):Observable<any>{
    return this._httpClient.delete(`${this.baseUrl}/api/v1/cart/${id}`,{
      headers:this.header
    })
  }

  updateProductQuantity(id:string , count:number):Observable<any>{

    return this._httpClient.put(`${this.baseUrl}/api/v1/cart/${id}`,{
      count:`${count}`
    },{
      headers:this.header
    })
  }

  clearCart():Observable<any>{

    return this._httpClient.delete(`${this.baseUrl}/api/v1/cart`,{
      headers:this.header
    })

  }




}


