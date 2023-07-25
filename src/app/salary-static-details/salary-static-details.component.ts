import { Component } from '@angular/core';

import { db, Role, Employee, SkillCategory, SkillFulfillment, Location, RoleCategoryMapping, Skill } from '../data/db';

@Component({
  selector: 'app-salary-static-details',
  templateUrl: './salary-static-details.component.html',
  styleUrls: ['./salary-static-details.component.scss'],
})
export class SalaryStaticDetailsComponent {
	basis_salary_value: number = 20000;
	location_salary_value: number = 5000;
	role_salary_value: number = 15000;

	employee: Employee = { name: "Frieda Muster", hiring_date: new Date(1900, 1, 1), percentage_solidary_contribution: 0, location_id: 1, role_id: 1 };

	location: Location[]|null = null;
	employee_role: Role[]|null = null;

	async ngOnInit(){

		this.employee = (await db.loadEmployee(4))![0];
		this.location = (await db.loadLocation(this.employee.location_id))
		this.employee_role = (await db.loadRole(this.employee.role_id))

		console.log(this.employee_role)
	}
}
