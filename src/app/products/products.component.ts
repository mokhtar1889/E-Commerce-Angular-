import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';
import { CartService } from '../services/cart.service';
import { WishListService } from '../services/wish-list.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[MessageService]
})
export class ProductsComponent {

  allProducts:Product[] = []
  searchKey:string = ''

  constructor(private _productService:ProductService , private _cartService:CartService , private _wishList:WishListService,
    private messageService: MessageService){
    this.getAllProducts()
  }



  getAllProducts(){
    this._productService.getAllProducts().subscribe({
      next:(res)=>{
        console.log(res)
        this.allProducts = res.data
      }
    })
  } 

  addProductToCart(productId:string){

    this._cartService.addProductToCart(productId).subscribe({
      next:(res)=>{
        console.log(res)
        this._cartService.numOfCartItems.next(res.numOfCartItems)
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product successfully added to cart' });
      }
    })
  
  }

  addProductToWishList(id:string){

    this._wishList.addProduct(id).subscribe({
      next:(res)=>{
        console.log(res)
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product successfully added to wish List' });
      }

    })


  }



}
