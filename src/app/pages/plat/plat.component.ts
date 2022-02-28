import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/shared/models/ingredient/ingredient';
import { IMeal, Meal } from 'src/app/shared/models/meal/meal';
import { MealService } from 'src/app/shared/services/meal.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.scss']
})
export class PlatComponent implements OnInit {

  id: string = '';

  isdetails = false;

  meal!: Meal;

  constructor(private _route: ActivatedRoute, private _mealService: MealService) {
    this._route.params.subscribe(params => {    //simple récup params we can do a .map on params
      this.id = params['id'];
      this._mealService.getOneMeal(this.id).subscribe((meal: IMeal) => {
        this.meal = new Meal(meal.id, meal.name, meal.subGroupMeal, meal.ingredients.map((i) => new Ingredient(i.id, i.name, i.dqr, i.subGroup, i.energyCost)), meal.otherStepCost);
      })
    });
  }

  ngOnInit(): void {

  }
}
