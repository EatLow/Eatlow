import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnergyCost } from 'src/app/shared/models/energyCost/energy-cost';
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

  energyCost?: EnergyCost;

  constructor(private _route: ActivatedRoute, private _mealService: MealService) {
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this._mealService.getOneMeal(this.id).subscribe((meal: IMeal) => {
        this.meal = new Meal(meal.id, meal.name, meal.subGroupMeal, meal.ingredients.map((i) => new Ingredient(i.id, i.name, i.dqr, i.subGroup, i.energyCost)), meal.otherStepCost);
        this.energyCost = this.meal.energyCost; // we have to save the value of the meal.energyCost getter, because when we use it in the (Angular) HTML template, it run the getter every time a change occur. source https://medium.com/showpad-engineering/why-you-should-never-use-function-calls-in-angular-template-expressions-e1a50f9c0496
      })
    });
  }

  ngOnInit(): void {

  }
}
