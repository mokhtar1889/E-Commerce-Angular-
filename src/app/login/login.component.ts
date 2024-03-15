import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoading:boolean = false 
  error:string = ""

  constructor(private _authService:AuthService , private _router:Router){}

  signInForm:FormGroup = new FormGroup({
    email : new FormControl("",[Validators.required,Validators.email]),
    password : new FormControl("",[Validators.required]),
  
  })


  signIn(){

    if(this.signInForm.valid){

      this.isLoading = true 
      this._authService.signIn(this.signInForm.value).subscribe({
        next:(res)=>{
          console.log(res)
          this.isLoading = false 
          localStorage.setItem("EcommerceUserToken",res.token);
          this._authService.getUserData();
          this._router.navigate(['/Home'])
        },
        error:(err)=>{
          this.isLoading = false 
          this.error = err.error.message
          console.log(err.error)
        },
        complete:()=>{
          this.isLoading = false 
        }
      })

    }    

  }

}
