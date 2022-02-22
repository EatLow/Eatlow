import { Component } from '@angular/core';
import { IngredientService } from './shared/services/ingredient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private ingredientService: IngredientService) {
  }
  title = 'EatLow';
}
