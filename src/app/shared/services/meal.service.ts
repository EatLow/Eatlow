import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMeal, Meal } from '../models/meal/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private urlApiMeals = environment.urlApi + '/api/meals';

  meals$ = new BehaviorSubject<IMeal[]>([]);
  mealsByName$ = new BehaviorSubject<Meal[]>([]);

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllMeals();
  }

  getAllMeals() {
    this.http.get<IMeal[]>(`${this.urlApiMeals}`).subscribe((meals: IMeal[]) => {
      this.meals$.next(meals);
    })
  }

  getOneMeal(id: number): Meal {
    const meal = this.meals$.value.filter((i) => {
      return i.id ? i.id === id : false;
    })[0];
    return new Meal(meal.id, meal.name, meal.subGroupMeal, meal.ingredients, meal.otherStepCost);
  }

  getMealsByName(name: string) {
    this.http.get<Meal[]>(`${this.urlApiMeals}/search/${name}`).subscribe((meals: IMeal[]) => {
      const mealInsctance = meals.map((m) => new Meal(m.id, m.name, m.subGroupMeal, m.ingredients, m.otherStepCost));
      this.mealsByName$.next(meals);
            //TODO se poser la question: On a besoin d'envoyer des instances de Meal ou simplement l'object avec la bonne Interface?
    })
  }
}
