import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/ingredient/ingredient';
import { IngredientService } from 'src/app/shared/services/ingredient.service';
import { NumberParse } from 'src/app/shared/services/numberParse';

@Component({
  selector: 'app-page-ingredient',
  templateUrl: './page-ingredient.component.html',
  styleUrls: ['./page-ingredient.component.scss']
})
export class PageIngredientComponent implements OnInit {
  public isLoading:boolean = true;
  public isError: boolean = false;
  public ingredient!:Ingredient;
  
  constructor(private router :ActivatedRoute, private _ingredientservice :IngredientService) { }
  public setColor() :string {
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
      this._ingredientservice.getOneIngredient(id).pipe(finalize(() => this.isLoading = false)).subscribe({
        next: (i) => {
          this.ingredient = new Ingredient(i.id, i.name, i.dqr, i.subGroup, i.energyCost);
        }, 
        error: (error:HttpErrorResponse) => {
          console.error(error);
          this.isError = true;
        }
      }
      );
  }

  public shortenedNumber(x:number):number {
    return NumberParse.shortenedNumber(x);
  }
  
}
