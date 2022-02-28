import { Component, OnInit } from '@angular/core';
import { IIngredient } from 'src/app/shared/models/ingredient/ingredient';
import { IngredientService } from 'src/app/shared/services/ingredient.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
 public ingredients : IIngredient[]=[];

  constructor(
    private ingredientService : IngredientService) { }

  ngOnInit(): void {
    this.ingredientService.getAllIngredients().subscribe((ingredients:IIngredient[]) => {
    this.ingredients = ingredients;
    console.table(this.ingredients);
    });
  }

}
