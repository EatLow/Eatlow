import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'accueil-logging-buttons',
  templateUrl: './logging-buttons.component.html',
  styleUrls: ['./logging-buttons.component.scss']
})
export class LoggingButtonsComponent implements OnInit
{
  public isAuth: boolean = false;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void
  {
    this._authService.isAuth$.subscribe((isAuth: boolean) =>
    {
      this.isAuth = isAuth;
    })
  }
}
