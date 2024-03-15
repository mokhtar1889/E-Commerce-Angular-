import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  constructor(private _authService:AuthService , private _router:Router){}

  forgetPasswordForm:FormGroup = new FormGroup({
    email :new FormControl("",[Validators.email , Validators.required])
  })


  forgetPassword(){
    this._authService.ForgetPassword(this.forgetPasswordForm.value).subscribe({
      next:(res)=>{
        console.log(res)
        this._router.navigate(['SignIn/verifyCode'])


      }
    })

  }




}
