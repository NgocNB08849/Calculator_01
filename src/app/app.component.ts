import { Component } from '@angular/core';
import { CalculateService } from 'src/services/calculate.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  subDisplayText = ''; 
  mainDisplayText = '';

  constructor(public calService: CalculateService){}

  create(input:any){
    this.calService.createOperater(input)
  }

  allClear(){
    this.calService.onAllClear();
  }

  deleteOne(){
    this.calService.onDeleteOne();
  }

}
