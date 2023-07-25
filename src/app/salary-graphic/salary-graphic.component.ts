import { Component } from '@angular/core';
@Component({
	selector: 'app-salary-graphic',
	templateUrl: './salary-graphic.component.html',
	styleUrls: ['./salary-graphic.component.scss']
})
export class SalaryGraphicComponent {

	static_salary_value: number = 52500;

	constructor() {

	}

	// scroll(target: string) {
	// 	this.scrollService.scrollTo(target, 700, 0);
	// 	console.log(target)
	// }
}
