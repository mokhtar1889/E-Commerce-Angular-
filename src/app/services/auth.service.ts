import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl:string = "https://ecommerce.routemisr.com"
  userData:BehaviorSubject<any> = new BehaviorSubject('')

  constructor(private _httpClient:HttpClient){
    if(localStorage.getItem("EcommerceUserToken")){
      this.getUserData();
    }
  }

  getUserData(){
    let userToken = JSON.stringify(localStorage.getItem("EcommerceUserToken"));
    console.log(userToken)
    let encodedUserToken = jwtDecode(userToken);
    this.userData.next(encodedUserToken) ;
    console.log(this.userData);

  }

  register(data:User):Observable<any>{
    return this._httpClient.post(`${this.baseUrl}/api/v1/auth/signup`,data)
  }

  signIn(data:any):Observable<any>{
    return this._httpClient.post(`${this.baseUrl}/api/v1/auth/signin`,data);
  }

  ForgetPassword(data:any):Observable<any>{
    return this._httpClient.post(`${this.baseUrl}/api/v1/auth/forgotPasswords`,data)

  }

  verifyCode(data:any):Observable<any>{
    return this._httpClient.post(`${this.baseUrl}/api/v1/auth/verifyResetCode`,data)
  }

  resetPassword(data:any){
    return this._httpClient.put(`${this.baseUrl}/api/v1/auth/resetPassword`,data)

  }
}
