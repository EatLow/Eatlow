import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMeal, Meal } from '../models/meal/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private urlApiMeals = environment.urlApi + '/api/public/meals';

  meals$ = new BehaviorSubject<IMeal[]>([]);
  selectedMeals$ = new BehaviorSubject<Meal[]>([]); //By Name or By ingredients

  constructor(private http: HttpClient) { 
    this.getAllMeals();
  }

  getAllMeals(): Observable<IMeal[]> {
    return this.http.get<IMeal[]>(`${this.urlApiMeals}`);
  }

  getOneMeal(id: string): Observable<IMeal> {
    return this.http.get<IMeal>(`${this.urlApiMeals}/${id}`);
  }

  getMealsByName(name: string): Observable<IMeal[]> {
    return this.http.get<IMeal[]>(`${this.urlApiMeals}/search/${name}`);
  }

  getMealsByIngredient(id: string): Observable<IMeal[]> {
    return this.http.get<IMeal[]>(`${this.urlApiMeals}/ByIngredient/${id}`);
  }

}
