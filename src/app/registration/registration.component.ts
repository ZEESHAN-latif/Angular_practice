import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {RestoService} from '../resto.service';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private resto: RestoService) { }
alert = false;
  ngOnInit(): void {
  }
  adduser =new FormGroup ({
    name : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl('')
  })

  usersubmit(){
    console.warn(this.adduser.value );
    this.resto.registeruser(this.adduser.value ).subscribe((result)=>{
console.warn(result);
this.alert=true
this.adduser.reset({});

    })
  }

  closed(){
    this.alert=false;
  }
}
