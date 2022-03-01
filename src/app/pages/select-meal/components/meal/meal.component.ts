import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'select-meal-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public urlPic! : string;

  @Input()
  public title! : string;

}
