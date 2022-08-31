import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { RestoService} from '../resto.service'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  constructor(private route:ActivatedRoute, private resto: RestoService) { }
  alert = false;
  editresto =new FormGroup ({
    name : new FormControl(''),
    email : new FormControl(''),
    address : new FormControl('')
  });
  restodata : any;



  
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.resto.currentResto(this.route.snapshot.params['id']).subscribe((result)=>{
      this.restodata= result;
      console.warn(this.restodata);


      this.editresto =new FormGroup ({
        name : new FormControl(this.restodata.name),
        email : new FormControl(this.restodata.email),
        address : new FormControl(this.restodata.address)
      })
    })
  }

  collection(){
    console.warn(this.editresto.value);
    this.resto.updateresto(this.route.snapshot.params['id'], this.editresto.value).subscribe((result)=>{
      console.warn("data is ", result);
      this.editresto.reset({});
      this.alert=true;
    })
    
  }

  closed(){
    this.alert=false;
  }
}
