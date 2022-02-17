import { Component } from '@angular/core';

@Component({
	selector: 'app-page-exemple',
	templateUrl: './page-exemple.component.html',
	styleUrls: ['./page-exemple.component.scss']
})
export class PageExempleComponent {
	constructor() {
		console.log('TEST PAGE EXEMPLE');
	}
}
