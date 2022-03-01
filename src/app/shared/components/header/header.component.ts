import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
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

  logout(): void
  {
    this._authService.logout();
  }
}

