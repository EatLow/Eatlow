import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient/ingredient';
import { IngredientService } from 'src/app/shared/services/ingredient.service';
import { NumberParse } from 'src/app/shared/services/numberParse';

@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.scss']
})
export class IngredientDetailComponent implements OnInit {

  @Input() ingredient!: Ingredient;
  ecoScore: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.ecoScore = NumberParse.shortenedNumber(this.ingredient.ecoScore);
  }

}
