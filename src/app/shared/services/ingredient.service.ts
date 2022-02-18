import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingredients } from '../models/ingredient/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService implements OnInit {

  private urlApiIngredients = environment.urlApi + '/api/ingredients';

  ingredients$ = new BehaviorSubject<Ingredients[]>([]);
  ingredientsByName$ = new BehaviorSubject<Ingredients[]>([]);

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllIngredients();
  }

  getAllIngredients() {
    this.http.get<Ingredients[]>(`${this.urlApiIngredients}/all`).subscribe((ingredients: Ingredients[]) => {
      this.ingredients$.next(ingredients);
    })
  }

  getOneIngredient(id: number) {
    const ingredient = this.ingredients$.value.filter((i) => {
      return i.id ? i.id === id : false;
    })[0];
    return { ...ingredient };
  }

  getIngredientsByName(name: string) {
    this.http.get<Ingredients[]>(`${this.urlApiIngredients}/search/${name}`).subscribe((ingredients: Ingredients[]) => {
      this.ingredientsByName$.next(ingredients);
    })
  }

}
