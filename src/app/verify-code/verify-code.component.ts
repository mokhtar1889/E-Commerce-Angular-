import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent {

  constructor(private _authService:AuthService ,private  _router:Router){}

  verifyCodeForm:FormGroup = new FormGroup({
    resetCode :new FormControl("",[Validators.required])
  })

  
  verifyCode(){
    this._authService.verifyCode(this.verifyCodeForm.value).subscribe({
      next:(res)=>{
        console.log(res); 
        this._router.navigate(['SignIn/resetPassword'])

      }

    })

  }



}
