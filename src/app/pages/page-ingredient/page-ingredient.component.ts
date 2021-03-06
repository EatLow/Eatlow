import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/ingredient/ingredient';
import { IngredientService } from 'src/app/shared/services/ingredient.service';
import { NumberParse } from 'src/app/shared/services/numberParse';

import { IngredientFactory } from '../../shared/services/factories/ingredientFactory/ingredient-factory.service';

@Component({
  selector: 'app-page-ingredient',
  templateUrl: './page-ingredient.component.html',
  styleUrls: ['./page-ingredient.component.scss']
})
export class PageIngredientComponent implements OnInit
{
  public isLoading: boolean = true;
  public isError: boolean = false;
  public ingredient!: Ingredient;

  constructor(private router: ActivatedRoute, private _ingredientservice: IngredientService, private _ingredientFactory: IngredientFactory) { }
  public setColor(): string
  {
    let color: string = '';
    if (this.ingredient.ecoScore > 0 && this.ingredient.ecoScore <= 1) color = "energy-score-no-shadow-green";
    else if (this.ingredient.ecoScore > 1 && this.ingredient.ecoScore <= 2) color = "energy-score-no-shadow-softgreen";
    else if (this.ingredient.ecoScore > 2 && this.ingredient.ecoScore <= 3) color = "energy-score-no-shadow-yellow";
    else if (this.ingredient.ecoScore > 3 && this.ingredient.ecoScore < 4) color = "energy-score-no-shadow-orange";
    else color = "energy-score-no-shadow-red";
    return color;
  }

  ngOnInit(): void
  {
    const id = this.router.snapshot.params["id"];
    this._ingredientservice.getOneIngredient(id).pipe(finalize(() => this.isLoading = false)).subscribe({
      next: (i) =>
      {
        this.ingredient = this._ingredientFactory.getIngredient(i);
      },
      error: (error: HttpErrorResponse) =>
      {
        this.isError = true;
      }
    }
    );
  }

  public shortenedNumber(x: number): number
  {
    return NumberParse.shortenedNumber(x);
  }

}
