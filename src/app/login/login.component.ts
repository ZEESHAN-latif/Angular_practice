import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm! : FormGroup
  // loginForm = new FormGroup({
  //   email : new FormControl('',[Validators.required, Validators.email]),
  //   password : new FormControl('')
  // })
  constructor(private frmblde: FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.frmblde.group({
      email: [''],
      password: ['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/users").subscribe((result)=>{
      const user = result.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Successfully");
        this.loginForm.reset();
        this.router.navigate(['Add'])
      }else {
        alert("user not found!!")
      }
    }),(err:any)=>{
      alert("Something went Wrong!!")
    }
  }

//  get mail(){
//     return this.loginForm.get('email')
//   }
}
