import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{

  constructor()
  {
    console.log('TEST PAGE EXEMPLE');
  }
  title = 'EatLow';
}
