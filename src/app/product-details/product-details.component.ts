import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../interfaces/product';
import { MessageService } from 'primeng/api';
import { CartService } from '../services/cart.service';
import { WishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers:[MessageService]
})
export class ProductDetailsComponent {

  productId:string = ''
  currentProduct : Product = {} as Product

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  constructor(private _productService:ProductService , private _activatedRoute:ActivatedRoute ,
    private _messageService:MessageService,
    private _cartService:CartService,
    private _wishListService:WishListService){
    this._activatedRoute.paramMap.subscribe((res:any)=>{
        console.log(res)
        this.productId = res.params.id
        console.log(this.productId)
      }
    )
    
    this.getSpecificProduct(this.productId)
  

  }


  getSpecificProduct(productId:string){
    this._productService.getSpecificProduct(productId).subscribe({
      next:(res)=>{
        console.log(res.data)
        this.currentProduct = res.data
      }
    })
  }

  addProductToCart(productId:string){
    this._cartService.addProductToCart(productId).subscribe({
      next:(res)=>{
        console.log(res)
        this._cartService.numOfCartItems.next(res.numOfCartItems)
        this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Product successfully added to cart' });
      }
    })
  
  }

  addProductToWishList(id:string){

    this._wishListService.addProduct(id).subscribe({
      next:(res)=>{
        console.log(res)
        this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Product successfully added to wish List' });
      }

    })


  }

}
