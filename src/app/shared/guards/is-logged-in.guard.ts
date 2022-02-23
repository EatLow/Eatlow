import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map, Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate
{
  constructor(private _authService: AuthService) { }
  canActivate(): Observable<boolean>
  {
    return this._authService.isAuth$.pipe(map(isAuth => isAuth));
  }

}
