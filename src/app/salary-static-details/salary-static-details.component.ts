import { Component } from '@angular/core';
import { db, Role, Employee, SkillCategory, SkillFulfillment, Location, RoleCategoryMapping, Skill } from '../data/db';


@Component({
  selector: 'app-salary-static-details',
  templateUrl: './salary-static-details.component.html',
  styleUrls: ['./salary-static-details.component.scss'],
})
export class SalaryStaticDetailsComponent {
  basis_salary_value: number = 25000;
  location_salary_value: number = 2500;
  role_salary_value: number = 15000;

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
  locations: Location[] = [];
  location: Location = { name: "Germany", salary: 7000, }

  async ngOnInit() {
    this.employee = (await db.loadEmployee(4))![0];
    this.roles = (await db.loadRoles())!;
    this.role = this.roles.filter((role) => role.id == this.employee.role_id)[0];
    this.all_categories = (await db.loadCategories())!;
    this.roleCategoryMapping = (await db.loadRoleCategoryMapping())!;
    this.your_skills = (await db.loadSkills())!;
    this.fulfillment = (await db.loadfulfillment(this.employee.id!))!;
    this.locations = (await db.loadLocations())!;
    this.getLocation();
    this.getRoleSalary();

  }


  getLocation() {
    this.location = this.locations.filter(loc => loc.id == this.employee.location_id)[0];
    this.location_salary_value = this.location.salary;
  }

  getRoleSalary() {
    this.role_salary_value = this.role?.salary_min!;
  }

}
