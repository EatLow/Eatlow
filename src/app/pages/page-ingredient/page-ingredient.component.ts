import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/shared/models/ingredient/ingredient';
import { IngredientService } from 'src/app/shared/services/ingredient.service';

@Component({
  selector: 'app-page-ingredient',
  templateUrl: './page-ingredient.component.html',
  styleUrls: ['./page-ingredient.component.scss']
})
export class PageIngredientComponent implements OnInit {
  score:number = 0.23;
  dqr:string = "0.14";
  ingredient!:Ingredient;
  

  constructor(private router :ActivatedRoute, private _ingredientservice :IngredientService) { }
  setColor() :string {
    let color: string = '';
    if (this.score > 0 && this.score <= 1) color = "green";
    else if (this.score > 1 && this.score <= 2) color = "softgreen";
    else if (this.score > 2 && this.score <= 3) color = "yellow";
    else if (this.score > 3 && this.score < 4) color = "orange";
    else color = "red";
    return color;
  }
  ngOnInit(): void {
    const id = this.router.snapshot.params["id"];
    this.ingredient = this._ingredientservice.getOneIngredient(parseInt(id, 10));
  }

}
