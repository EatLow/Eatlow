import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Meal } from '../models/meal/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private urlApiMeals = environment.urlApi + '/api/meals';

  meals$ = new BehaviorSubject<Meal[]>([]);
  mealsByName$ = new BehaviorSubject<Meal[]>([]);

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllMeals();
  }

  getAllMeals() {
    this.http.get<Meal[]>(`${this.urlApiMeals}`).subscribe((meals: Meal[]) => {
      this.meals$.next(meals);
    })
  }

  getOneMeal(id: number) {
    const ingredient = this.meals$.value.filter((i) => {
      return i.id ? i.id === id : false;
    })[0];
    return { ...ingredient };
  }

  getIngredientsByName(name: string) {
    this.http.get<Meal[]>(`${this.urlApiMeals}/search/${name}`).subscribe((ingredients: Meal[]) => {
      this.mealsByName$.next(ingredients);
    })
  }
}
