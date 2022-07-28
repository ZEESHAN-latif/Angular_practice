import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  alert = false;
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }
addresto =new FormGroup ({
  name : new FormControl(''),
  email : new FormControl(''),
  address : new FormControl('')
})

getresto(){

  this.resto.saveresto(this.addresto.value).subscribe((result)=>{
    this.alert=true;
    })
    this.addresto.reset({});
}

closed(){
  this.alert=false;
}

}
