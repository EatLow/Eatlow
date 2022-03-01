import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnergyCost } from 'src/app/shared/models/energyCost/energy-cost';
import { IMeal, Meal } from 'src/app/shared/models/meal/meal';
import { MealService } from 'src/app/shared/services/meal.service';

import { MealFactory } from '../../shared/services/factories/mealFactory/meal-factory.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.scss']
})
export class PlatComponent implements OnInit
{

  public id: string = '';
  public isDetails = false;
  public meal!: Meal;
  public energyCost?: EnergyCost;


  constructor(
    private _route: ActivatedRoute,
    private _mealService: MealService,
    private _mealFactory: MealFactory)
  {

  }
  ngOnInit(): void
  {
    this._route.params.subscribe(params =>
    {

      this.id = params['id'];
      this._mealService.getOneMeal(this.id).subscribe((meal: IMeal) =>
      {
        this.meal = this._mealFactory.getMeal(meal);
        this.energyCost = this.meal.energyCost;
      })
    });
  }
}
