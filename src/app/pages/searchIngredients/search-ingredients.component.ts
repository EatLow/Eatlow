import { Component, OnInit } from '@angular/core';
import { IIngredient } from 'src/app/shared/models/ingredient/ingredient';
import { IngredientService } from 'src/app/shared/services/ingredient.service';

@Component({
  selector: "app-search-ingredients",
  templateUrl: "./search-ingredients.component.html",
  styleUrls: ["./search-ingredients.component.scss"],
})
export class SearchIngredientsComponent implements OnInit
{
  public isSubmited: boolean = false;
  public isEmpty: boolean = false;

  filterTerm!: string;

  public ingredients: IIngredient[] = [];
  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void { }
  onSubmit(): void { }

  onClick(inputValue: string)
  {
    if (inputValue !== "")
    {
      this.ingredientService
        .getIngredientsByName(inputValue)
        .subscribe((ingredients: IIngredient[]) =>
        {
          if (ingredients.length === 0)
          {
            this.isEmpty = true;
          } else
          {
            this.isSubmited = true;
            this.isEmpty = false;
          }
          this.ingredients = ingredients;
        });
    }
  }
}
