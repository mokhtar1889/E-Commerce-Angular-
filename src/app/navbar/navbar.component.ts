import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoged:boolean = false 
  value:string = "" 
  numOfCartItems:number = 0 

  constructor(private _authService:AuthService ,private _router:Router,private _cartService:CartService){
    _authService.userData.subscribe((res)=>{
      if(_authService.userData.getValue()){
        console.log(res)
        this.isLoged = true
      }else{
        this.isLoged = false 
      }
    })

    this._cartService.numOfCartItems.subscribe((res)=>{
      this.numOfCartItems = res
    })
    

  }

  logout(){
    localStorage.removeItem("EcommerceUserToken");
    this._router.navigate(["/SignIn"]);
    this.isLoged = false;

  }
  

}
