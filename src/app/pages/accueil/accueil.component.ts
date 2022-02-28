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
  public hover: boolean = true;   public hover2: boolean = true;   public hover3: boolean = true; public hover4: boolean = true;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void
  {
    this._authService.isAuth$.subscribe((isAuth: boolean) =>
    {
      this.isAuth = isAuth // true pour tester un token;
    })
  }


mouseEvHandler(hover : boolean){
  if (this.isAuth ==true)
  {this.hover = hover;}
  else
  {this.hover = true;}
}
 mouseEvHandler2(hover : boolean){
if(){
  if (this.isAuth ==true)
  this.hover2 = hover;
  else this.hover2 = true;
}
}
mouseEvHandler3(hover : boolean){
  if (this.isAuth ==true)
  this.hover3 = hover;
  else this.hover3 = true;
}
mouseEvHandler4(hover : boolean){
  if (this.isAuth ==true)
  this.hover4 = hover;
  else this.hover4 = true;
}
}
