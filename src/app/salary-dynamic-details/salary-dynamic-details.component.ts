import { Component } from '@angular/core';
import { db, Role, Employee, SkillCategory, SkillFulfillment, Location, RoleCategoryMapping, Skill } from '../data/db';


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

	employee: Employee = { name: "Frieda Muster", hiring_date: new Date(1900, 1, 1), percentage_solidary_contribution: 0, location_id: 1, role_id: 1 };

	roles: Role[] = [];
	role?: Role;
	followingRoles: Role[] = [];
	roleCategoryMapping: RoleCategoryMapping[] = [];
	all_skills: Skill[] = [];

	your_skills: Skill[] = [];


	all_categories: SkillCategory[] = [];
	your_categories: SkillCategory[] = [];

	fulfillment: SkillFulfillment[] = [];


	async ngOnInit() {
		this.employee = (await db.loadEmployee(4))![0];
		this.roles = (await db.loadRoles())!;
		this.role = this.roles.filter((role) => role.id == this.employee.role_id)[0];
		this.all_categories = (await db.loadCategories())!;
		this.roleCategoryMapping = (await db.loadRoleCategoryMapping())!;
		this.your_skills = (await db.loadSkills())!;
		this.fulfillment = (await db.loadfulfillment(this.employee.id!))!;
		this.getCategoriesForRole();
		this.calculateHardSkillsMax();
		this.calculateHardSkillsCurrent();
		this.calculateSoftSkillsMax();
		this.calculateSoftSkillsCurrent();
		this.calculateTimeAtCompany();
	}


	calculateHardSkillsMax() {

		let sum = 0;
		for (let cat of this.your_categories.filter(cat => cat.is_hard_skill)) {
			sum += this.roleCategoryMapping.filter((m) => m.skill_category_id == cat.id)[0].required_amount
		}
		this.hardskills_max = sum;
	}

	calculateHardSkillsCurrent() {
		let sum = 0;
		for (let cat of this.your_categories.filter(cat => cat.is_hard_skill)) {

			for (let skill of this.your_skills) {
				if (skill.category_id == cat.id) {

					sum += this.getFullfillmentOfSkill(skill.id!)
				}
			}
		}
		this.hardskills_current = sum;


	}
	calculateSoftSkillsMax() {

		let sum = 0;
		for (let cat of this.your_categories.filter(cat => !cat.is_hard_skill)) {
			sum += this.roleCategoryMapping.filter((m) => m.skill_category_id == cat.id)[0].required_amount
		}
		this.softskills_max = sum;
	}

	calculateSoftSkillsCurrent() {
		let sum = 0;
		for (let cat of this.your_categories.filter(cat => !cat.is_hard_skill)) {
			for (let skill of this.your_skills) {
				if (skill.category_id == cat.id) {
					sum += this.getFullfillmentOfSkill(skill.id!)
				}
			}
		}
		this.softkills_current = sum;


	}



	getFullfillmentOfSkill(skillId: number) {
		console.log(skillId);
		return this.fulfillment.filter((ful) => ful.skill_id == skillId)[0].fulfillment;
	}

	getCategoriesForRole() {
		let mapping = this.roleCategoryMapping.filter((rS) => rS.role_id == this.role!.id);

		for (let m of mapping) {
			this.your_categories.push(this.all_categories.filter((cat) => cat.id == m.skill_category_id)[0]);
		}

	}

	calculateTimeAtCompany() {
		const now = new Date();
		const timeDiffInMilliseconds = now.getTime() - this.employee.hiring_date.getTime();
		const yearsSinceDate = timeDiffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

		this.time_current = Math.floor(yearsSinceDate);
		if (this.time_current > this.time_max) this.time_current = this.time_max;
	}

	getOnlyHardCategories() {
		return this.your_categories.filter(cat => cat.is_hard_skill);
	}
	getOnlySoftCategories() {
		return this.your_categories.filter(cat => !cat.is_hard_skill);
	}


}
