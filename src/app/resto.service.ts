import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url="http://localhost:3000/resturants"
  rootUrl="http://localhost:3000/"

  constructor(private http:HttpClient) { }
  getlist(){
    return this.http.get(this.url)
  }

  saveresto(data:any){
    // console.warn(data);
    
    return this.http.post(this.url, data)
  }

  deleteResto(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }

  currentResto(id:number){
    return this.http.get(`${this.url}/${id}`)
  }

  updateresto(id:any, data:any){
return this.http.put(`${this.url}/${id}`, data)
  }

  registeruser(data: any){
    return this.http.post(this.rootUrl + "users", data)
  }
}
