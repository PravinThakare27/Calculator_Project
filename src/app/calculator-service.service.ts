import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class CalculatorServiceService {

  constructor(private http:HttpClient) { }
  addition(num:any){
    return this.http.get("http://localhost:8080/add/"+num);
  }
  substraction(num:any){
   return  this.http.get("http://localhost:8080/sub/"+num);
  }
  multiplication(num:any){
    return this.http.get("http://localhost:8080/mul/"+num);
  }
  division(num:any){
   return  this.http.get("http://localhost:8080/div/"+num);
  }
  squre(displaystr:any){
    return this.http.get(`http://localhost:8080/sqr/${displaystr}`);
  }
  squreroot(displaystr:any){
    return this.http.get(`http://localhost:8080/sqrroot/${displaystr}`);
    
  }
  reset(){
    return this.http.get("http://localhost:8080/reset");
  }

}
