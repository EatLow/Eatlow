import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingredient, IIngredient } from '../models/ingredient/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService implements OnInit {

  private urlApiIngredients = environment.urlApi + '/api/ingredients';

  ingredients$ = new BehaviorSubject<IIngredient[]>([]);
  ingredientsByName$ = new BehaviorSubject<Ingredient[]>([]);

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllIngredients();
  }

  getAllIngredients() {
    this.http.get<IIngredient[]>(`${this.urlApiIngredients}/all`).subscribe((ingredients: IIngredient[]) => {
      this.ingredients$.next(ingredients);
    })
  }

  getOneIngredient(id: number): Ingredient {
    const ingredient = this.ingredients$.value.filter((i) => {
      return i.id ? i.id === id : false;
    })[0];
    return new Ingredient(ingredient.id, ingredient.name, ingredient.dqr, ingredient.subGroup, ingredient.energyCost);
  }

  getIngredientsByName(name: string) {
    this.http.get<Ingredient[]>(`${this.urlApiIngredients}/search/${name}`).subscribe((ingredients: IIngredient[]) => {
      const ingredientsInstance = ingredients.map((i) => new Ingredient(i.id, i.name, i.dqr, i.subGroup, i.energyCost)); 
      this.ingredientsByName$.next(ingredientsInstance);
      //TODO se poser la question: On a besoin d'envoyer des instances d'Ingredients ou simplement l'object avec la bonne Interface?
    });
  }


}
