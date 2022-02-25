import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit
{

  public isAuth!: boolean;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void
  {
    this._authService.isAuth$.subscribe((isAuth: boolean) =>
    {
      this.isAuth = isAuth;
    })
  }

}
