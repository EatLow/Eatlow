import { Component } from '@angular/core';
import { IngredientService } from 'src/app/shared/services/ingredient.service';

@Component({
	selector: 'app-page-exemple',
	templateUrl: './page-exemple.component.html',
	styleUrls: ['./page-exemple.component.scss']
})
export class PageExempleComponent {
	constructor(private ingredientService: IngredientService) {
		console.log('TEST PAGE EXEMPLE');
		ingredientService.getAllIngredients();
	}
}
