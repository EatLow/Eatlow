import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IIngredient, Ingredient } from 'src/app/shared/models/ingredient/ingredient';
import { IngredientService } from 'src/app/shared/services/ingredient.service';

@Component({
  selector: 'app-page-ingredient',
  templateUrl: './page-ingredient.component.html',
  styleUrls: ['./page-ingredient.component.scss']
})
export class PageIngredientComponent implements OnInit {
  ingredient!:Ingredient;
  
  constructor(private router :ActivatedRoute, private _ingredientservice :IngredientService) { }
  setColor() :string {
    let color: string = '';
    if (this.ingredient.ecoScore > 0 && this.ingredient.ecoScore <= 1) color = "green";
    else if (this.ingredient.ecoScore > 1 && this.ingredient.ecoScore <= 2) color = "softgreen";
    else if (this.ingredient.ecoScore > 2 && this.ingredient.ecoScore <= 3) color = "yellow";
    else if (this.ingredient.ecoScore > 3 && this.ingredient.ecoScore < 4) color = "orange";
    else color = "red";
    return color;
  }
  ngOnInit(): void {
    const id = this.router.snapshot.params["id"];
    // const ingredientsInstance = ingredient.map((i) => new Ingredient(i.id, i.name, i.dqr, i.subGroup, i.energyCost));
    this._ingredientservice.getOneIngredient(parseInt(id, 10)).subscribe((i) => {
      this.ingredient = new Ingredient(i.id, i.name, i.dqr, i.subGroup, i.energyCost);
    });
  }

}
