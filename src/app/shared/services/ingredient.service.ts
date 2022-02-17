import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingredients } from '../models/ingredient/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private urlApiIngredients = environment.urlApi + '/api/ingredients';

  ingredients$ = new BehaviorSubject<Ingredients[]>([]);

  constructor(private http: HttpClient) { }

  getAllIngredient() {
    this.http.get<Ingredients[]>(this.urlApiIngredients + '/all').subscribe((ingredients: Ingredients[]) => {
      this.ingredients$.next(ingredients)
    })
  }

  getOneIngredient(id: number) {
    const ingredient = this.ingredients$.value.filter((i) => {
      return i.id ? i.id === id : false;
    })[0];
    return { ...ingredient };
  }

}
