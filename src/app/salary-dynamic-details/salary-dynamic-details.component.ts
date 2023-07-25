import { Component } from '@angular/core';

@Component({
  selector: 'app-salary-dynamic-details',
  templateUrl: './salary-dynamic-details.component.html',
  styleUrls: ['./salary-dynamic-details.component.scss']
})
export class SalaryDynamicDetailsComponent {
	hardskills_max: number = 80;
	hardskills_current: number = 55;

	softskills_max: number = 15;
	softkills_current: number = 9;

	time_max: number = 5;
	time_current: number = 3;
}
