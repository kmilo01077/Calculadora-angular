import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {
  
  total: number =0;
  resta: number =0;
  multiplicacion: number =0;
  division: number =0;
  potencia: number =0;
 constructor() { }
  
  getCalculo(num1:string, num2:string){

    this.resta= parseInt(num1)-parseInt(num2);
    this.multiplicacion= parseInt(num1)*parseInt(num2);
    this.division= parseInt(num1)/parseInt(num2);
    this.potencia= Math.pow(parseInt(num1),parseInt(num2)) ;
    this.total= parseInt(num1)+parseInt(num2);
        
  }

  ngOnInit(): void {
  }

}
