import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs';
import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewCmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ng-pipes-demo';
  presentDate = new Date();
  currentDate = new Date();
  time$ = interval(1000).pipe(
    map(() => new Date()) 
  )
  testObject = {
    name: 'Reuel Christian Sundiam',
    age: 25,
    food: 'Cheesecake',
    numbers: [1, 2, 3, 4, 5]
  }
  testArray = [1, 2, 3, 4, 5];
  price : number = 20000;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"]; ngOnInit(){

  }
  str: string = 'abcdefghij';
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  pi: number = 3.14159265359;
  todaydate;
  componentproperty;
  constructor(private myservice:MyserviceService){
    this.todaydate = this.myservice.showTodayDate();
    this.componentproperty = this.myservice.serviceproperty;
  }
}
