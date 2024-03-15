import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../interfaces/cart';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[MessageService]
})
export class CartComponent implements OnInit {

  cartItems:Cart = {} as Cart ;
  isEmpty:boolean = false 


  constructor(private _cartService:CartService , private _messageService:MessageService){}

  ngOnInit(): void {
    this.getUserCart()
  }

  getUserCart(){
    this._cartService.getUserCart().subscribe({
      next:(res)=>{
        this.cartItems = res
        console.log(res)
        console.log(this.cartItems)
      },
      error:(error)=>{
          console.log(error.error.message)
          this.isEmpty = true
      }
    })
  }

  deleteItem(id:string){

    this._cartService.deleteCardItem(id).subscribe({
      next:(res)=>{
        this.cartItems = res
        this._cartService.numOfCartItems.next(res.numOfCartItems)
        this._messageService.add({ severity: 'error', summary: 'Delete Product', detail: 'Product Deleted From Cart'});
        console.log(res)

      }
    })
  }

  updateProductQuantity(id:string , count:number){
    this._cartService.updateProductQuantity(id,count).subscribe({
      next:(res)=>{
        this.cartItems = res
        console.log(res)
      }
    })
  }

  clearCart(){
    this._cartService.clearCart().subscribe({
      next:(res)=>{
        console.log(res)
        this.cartItems = {} as Cart
        this._cartService.numOfCartItems.next(0)
        this.isEmpty = true
      }
    })
  }

}
