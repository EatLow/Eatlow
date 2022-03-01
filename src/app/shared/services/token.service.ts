import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService
{
  private _TOKEN_KEY: string = "token";
  private _token: string | null = null;
  private _storage = sessionStorage;

  constructor()
  {
    this._token = this._storage.getItem(this._TOKEN_KEY);
  }

  public getToken(): string | null
  {
    return this._token;
  }

  public removeToken(): void
  {
    this._storage.removeItem(this._TOKEN_KEY);
    this._token = null;
  }

  public setToken(token: string): void
  {
    this._storage.setItem(this._TOKEN_KEY, token);
    this._token = token;
  }
}
