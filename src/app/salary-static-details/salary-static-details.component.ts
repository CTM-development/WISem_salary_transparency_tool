import { Component } from '@angular/core';

@Component({
  selector: 'app-salary-static-details',
  templateUrl: './salary-static-details.component.html',
  styleUrls: ['./salary-static-details.component.scss'],
})
export class SalaryStaticDetailsComponent {
	basis_salary_value: number = 20000;
	location_salary_value: number = 5000;
	role_salary_value: number = 15000;
}
