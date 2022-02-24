import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.scss']
})
export class IngredientDetailComponent implements OnInit {

  ecoscore = 0.11;
  title = "test"; 

  constructor() { }

  ngOnInit(): void {
  }

}
