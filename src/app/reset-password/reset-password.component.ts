import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  constructor(private _authService:AuthService ,private  _router:Router){}

  resetPasswordForm:FormGroup = new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    newPassword:new FormControl("",[Validators.required , Validators.pattern(/^[A-Za-z].{6,8}/gi)])
  })

  resetPassword(){
    console.log(this.resetPasswordForm.value)
    this._authService.resetPassword(this.resetPasswordForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        this._router.navigate(['/SignIn'])

      }

    })
  }

}
