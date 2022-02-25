import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingredient, IIngredient } from '../models/ingredient/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private urlApiIngredients = environment.urlApi + '/api/public/ingredients';

  constructor(private http: HttpClient) {
  }

  getAllIngredients(): Observable<IIngredient[]> {
    return this.http.get<IIngredient[]>(`${this.urlApiIngredients}`);
  }

  getOneIngredient(id: number): Observable<IIngredient> {
    return this.http.get<IIngredient>(`${this.urlApiIngredients}/${id}`);
  }

  getIngredientsByName(name: string): Observable<IIngredient[]> {
    return this.http.get<IIngredient[]>(`${this.urlApiIngredients}/search/${name}`);
  }

  getIngredientsFromMeal(id: number): Observable<IIngredient[]> {
    return this.http.get<Ingredient[]>(`${this.urlApiIngredients}/ByMeal/${id}`);
  }
}
