import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit
{

  public isAuth!: boolean;
  private _sub!: Subscription
  public hover: boolean = true; public hover2: boolean = true; public hover3: boolean = true; public hover4: boolean = true;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void
  {
    this._sub = this._authService.isAuth$.subscribe((isAuth: boolean) =>
    {
      this.isAuth = isAuth // true pour tester un token;
    })
  }
  ngOnDestroy(): void
  {
    this._sub.unsubscribe();
  }


  mouseEvHandler(hover: boolean)
  {
    this.hover = hover; // On veut qu'il reste actif sans tenir compte du token
  }
  mouseEvHandler2(hover: boolean)
  {
    if (this.isAuth == true)
      this.hover2 = hover;
    else this.hover2 = true;
  }
  mouseEvHandler3(hover: boolean)
  {
    this.hover3 = hover;
  }
  mouseEvHandler4(hover: boolean)
  {
    this.hover4 = hover;
  }
}
