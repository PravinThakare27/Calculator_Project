import { Component } from '@angular/core';
import { CalculatorServiceService } from './calculator-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  numberstr:any=" ";
  displaystr:any=0
  equaloperation=""
  iconoper=" "
  constructor(private calcu_ser:CalculatorServiceService){

  }
  clean(str:any){
    console.log('reset');
    this.numberstr=''
    this.displaystr=0
    this.iconoper=''
    this.calcu_ser.reset().subscribe(result=>{
      console.log(result)
    });
  }
  pressnum(num:any){
   
    this.numberstr+=num
    
  }
  pressope(oper:string){
    console.log(oper)
    this.equaloperation=oper
    if(oper=='+'){
  
    this.iconoper=oper
   if(this.numberstr!='0'){
    this.calcu_ser.addition(this.numberstr).subscribe(result=>{
      this.displaystr=result
    });
    this.numberstr='';
   }
    
    }
    if(oper=='-'){
      
      this.iconoper=oper

      if(this.numberstr!='0'){
        this.calcu_ser.substraction(this.numberstr).subscribe(result=>{
       
          this.displaystr=result
        });
        this.numberstr='';
    }
  }
    if(oper=='*'){
     
      this.iconoper=oper
    
      if(this.numberstr!='0'){
        this.calcu_ser.multiplication(this.numberstr).subscribe(result=>{
      
          this.displaystr=result
        });
        this.numberstr='';
    }
    }
    if(oper=='/'){
      
    
    this.iconoper=oper
   
    if(this.numberstr!='0'){
      this.calcu_ser.division(this.numberstr).subscribe(result=>{
       
        this.displaystr=result
      });
      this.numberstr='';
  }
    }
    if(oper=='sqr'){
      
     
      this.iconoper=''
     
      if(this.numberstr!='0'){
        console.log(this.numberstr)
        if(this.displaystr==0){
          this.displaystr=this.numberstr
        }
        console.log(this.numberstr)
        this.calcu_ser.squre(this.displaystr).subscribe(result=>{
         
          this.displaystr=result
       
        });
        this.numberstr=''
    }
      }
      if(oper=='sqrroot'){
      
        
        this.iconoper=''
       
        if(this.numberstr!='0'){
          this.calcu_ser.squreroot(this.displaystr).subscribe(result=>{
           
            this.displaystr=result
            
            
          });
          
      }

     
        }
  }
  equalope(){
    this.pressope(this.equaloperation);
  }
}
