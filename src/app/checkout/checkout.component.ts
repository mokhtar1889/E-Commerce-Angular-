import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrdersService } from '../services/orders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  cartId:string = ""

  constructor(private _ordersService:OrdersService ,private _activatedRoute:ActivatedRoute){
    this._activatedRoute.paramMap.subscribe({
      next:(res:any)=>{
        console.log(res)
        this.cartId = res.params.cardId
      }
    })

  }

  shippingAddressForm:FormGroup = new FormGroup({
    details: new FormControl(""),
    phone : new FormControl(""),
    city : new FormControl("")
  })


  checkout(){
    this._ordersService.checkout(this.cartId,this.shippingAddressForm.value).subscribe({
      next:(res)=>{
        console.log(res)
        if(res.status === "success"){
          window.location.href = res.session.url

        }
      }
    })
  }
}
