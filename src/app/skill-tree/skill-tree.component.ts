import { Component } from '@angular/core';

import { liveQuery } from 'dexie';
import { db, Role, Employee, SkillCategory, SkillFulfillment, Location, RoleCategoryMapping, Skill } from '../data/db';

@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.scss']
})
export class SkillTreeComponent {
  employee: Employee = { name: "Frieda Muster", hiring_date: new Date(1900, 1, 1), percentage_solidary_contribution: 0, location_id: 1, role_id: 1 };
  employees: Employee[] = [];
  roles: Role[] = [];
  role?: Role;
  followingRoles: Role[] = [];
  roleCategoryMapping: RoleCategoryMapping[] = [];
  all_skills: Skill[] = [];

  your_skills: Skill[] = [];


  all_categories: SkillCategory[] = [];
  your_categories: SkillCategory[] = [];


  roles$ = liveQuery(() => db.roles.toArray());
  fulfillment: SkillFulfillment[] = [];

  identifyList(index: number, role: Role) {
    return `${role.id}${role.name}`;
  }


  async ngOnInit() {
    await this.loadEmployees(4);
    this.employee = this.employees[0];
    await this.loadRoles();
    this.role = this.roles.filter((role) => role.id == this.employee.role_id)[0];
    await this.loadCategories();
    await this.loadRoleSkills();
    await this.loadSkills();
    await this.loadfulfillment(this.employee.id!);

    this.getFollowingRoles();
    this.getCategoriesForRole();
    this.getSkillsForRole();
    console.log(this.your_categories);
    console.log(this.your_skills);
  }

  async loadEmployees(id: number) {
    try {
      this.employees = await db.employees.where("id").equals(id).toArray();
    } catch (error) {
      console.error('Error retrieving employees:', error);
    }
  }

  async loadRoles() {
    try {
      this.roles = await db.roles.toArray();
    } catch (error) {
      console.error('Error retrieving roles:', error);
    }
  }

  async loadCategories() {
    try {
      this.all_categories = await db.skillCategory.toArray();
    } catch (error) {
      console.error('Error retrieving categories:', error);
    }
  }

  async loadSkills() {
    try {
      this.all_skills = await db.skills.toArray();
    } catch (error) {
      console.error('Error retrieving skills:', error);
    }
  }


  async loadCategoryRoleMapping() {
    try {
      this.roleCategoryMapping = await db.roleCategoryMapping.toArray();
    } catch (error) {
      console.error('Error retrieving Role Mapping:', error);
    }
  }


  async loadRoleSkills() {
    try {
      this.roleCategoryMapping = await db.roleCategoryMapping.toArray();
    } catch (error) {
      console.error('Error retrieving Role Skill Mapping:', error);
    }
  }

  async loadfulfillment(employee_id: number) {
    try {
      this.fulfillment = await db.skillFulfillments.where("employee_id").equals(employee_id).toArray();
      console.log(this.fulfillment);
      console.log(employee_id);
    } catch (error) {
      console.error('Error retrieving Skill Fulfillment:', error);
    }
  }

  getFollowingRoles() {

    let assessedRole = this.role;
    let followingRoleId = assessedRole?.following_role;

    while (typeof followingRoleId != 'undefined') {

      assessedRole = this.roles.filter((role) => role.id == followingRoleId)[0];
      this.followingRoles.push(assessedRole);
      followingRoleId = assessedRole?.following_role;
    }


  }

  getCategoriesForRole() {
    let mapping = this.roleCategoryMapping.filter((rS) => rS.role_id == this.role!.id);

    for (let m of mapping) {
      this.your_categories.push(this.all_categories.filter((cat) => cat.id == m.skill_category_id)[0]);
    }

  }

  getSkillsForRole() {
    for (let cat of this.your_categories) {
      this.your_skills.push(this.all_skills.filter((skill) => skill.category_id == cat.id)[0]);
    }

  }

  getFullfillmentOfSkill(skillId: number) {
    return this.fulfillment.filter((ful) => ful.skill_id == skillId)[0].fulfillment;
  }

  getRequiredAmountOfCategory(categoryId: number) {
    return this.roleCategoryMapping.filter((m) => m.skill_category_id == categoryId)[0].required_amount;
  }


}




