import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  X: string ='';
  Y: string ='';
  isY: boolean = false;
  arr: string = '';
  done: boolean = false;
  o: string = '';
  constructor() {

  }

  createOperater(input: any) {
    if (this.done == true) {
      this.arr = input;
      this.o = '';
      this.X = input;
      this.Y = '';
      this.done = false;
    } else {
      this.arr += input;
      let temp = parseFloat(input);
      if (isNaN(temp)) {
        if (input == '=') {
          this.arr = this.cal(parseFloat(this.X), parseFloat(this.Y), this.o);
        }else if(input == 'C'){
          this.arr = '';
          this.X = '';
          this.Y = '';
        }
         else {
          this.o = input;
          this.isY = true;
        }
      } else {
        if (this.isY) {
          this.Y += input;
        } else {
          this.X += input;
        }
      }
    }
  }
  cal(x: any, y: any, o: any) {

    this.done = true;
    switch (o) {
      case '+': return x + y;
      case '-': return x - y;
      case 'x': return x * y;
      case '/': return x / y;
      default: break;
    }

  }
  onAllClear(){
    this.arr = '';
    this.o = '';
  }

  onDeleteOne(){
    this.arr = this.arr.slice(0, this.arr.length - 1);
  }

}
