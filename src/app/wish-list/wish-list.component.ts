import { Component } from '@angular/core';
import { WishListService } from '../services/wish-list.service';
import { Product } from '../interfaces/product';
import { CartService } from '../services/cart.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent {

  productWishlist:Product[] = [] 

  constructor(private _wishList:WishListService , private _cartService:CartService){
    this.getWishist()
  }

  getWishist(){
    this._wishList.getWishList().subscribe({
      next:(res)=>{
        console.log(res)
        this.productWishlist = res.data

      }
    })
  }

  removeProduct(id:string){
    this._wishList.removeProduct(id).subscribe({
      next:(res)=>{
        console.log(res)
        this.getWishist()
      }
    })
  }

  addToCart(id:string){

    this._cartService.addProductToCart(id).subscribe({
      next:(res)=>{
        console.log(res)
        this.removeProduct(id)
      }
    })
  }





}
