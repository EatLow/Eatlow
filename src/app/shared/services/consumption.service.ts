import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IConsumable } from '../models/consumable/IConsumable';
import { IUser } from '../models/user/user';
import { ConsumptionFactory } from './factories/consumptionFactory/consumption-factory.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionService
{
  private _idUser: number;
  private _baseUrl: string;
  public consumptions$: ReplaySubject<IConsumable[]> = new ReplaySubject();
  private _headers: HttpHeaders;
  constructor(private _tokenService: TokenService, private _http: HttpClient, private _consumableFactory: ConsumptionFactory)
  {
    this._idUser = 15; // Viendra d'un service User ou autre j'sais pas mec qu'est-ce tu veux putain
    this._baseUrl = `${environment.urlApi}/api/users/${this._idUser}`
    this._headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Authorization', `Bearer ${this._tokenService.getToken()}`);
    this.getAllIngredients();
  }

  public getAllIngredients()
  {
    this._http
      .get<IUser>(this._baseUrl, {
        headers: this._headers,
        withCredentials: true
      })
      .subscribe({
        next: (user: IUser) =>
        {
          const consumables: IConsumable[] = this._consumableFactory.getConsumable(user.historyMeals, user.historyIngredients);
          this.consumptions$.next(consumables);
        },
        error: () =>
        {
        }
      });
  }
}
