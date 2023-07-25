import Dexie, { Table } from 'dexie';

export interface Location {
  id?: number;
  name: string;
  base_salary: number;
}
export interface Employee {
  id?: number;
  location_id: number;
  role_id: number;
  name: string;
  hiring_date: Date;
  percentage_solidary_contribution: number;
  skill_fullfillment_id?: number;
}
export interface Role {
  id?: number;
  name: string;
  salary_min: number;
  salary_max: number;
  following_role?: number;
}

export interface SkillFulfillment {
  id?: number;
  skill_id: number;
  employee_id: number;
  fulfillment: number;
}

export interface Skill {
  id?: number;
  name: String;
  is_hard_skill: boolean;
}

export interface RoleSkills {
  id?: number;
  role_id: number;
  skill_id: number;
  skill_weight: number;
}

export interface Location {
  id?: number;
  name: string;
  salary: number;
}

export class AppDB extends Dexie {
  roles!: Table<Role, number>;
  employees!: Table<Employee, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(7).stores({
      roles: '++id',
      employees: '++id',
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    await db.roles.bulkAdd([
      {

        salary_min: 50000,
        salary_max: 70000,
        name: "Lead Dev",
      },
      {

        salary_min: 50000,
        salary_max: 70000,
        following_role: 1,
        name: "Senior Dev",
      },
      {

        salary_min: 50000,
        salary_max: 70000,
        following_role: 2,
        name: "Junior Dev",
      },
    ]);



    await db.employees.bulkAdd([
      {
        name: "Max Muster",
        role_id: 1,
        location_id: 1,
        hiring_date: new Date(2020, 12, 12),
        percentage_solidary_contribution: 0,

      },
      {
        name: "Maxle Muster",
        role_id: 2,
        location_id: 1,
        hiring_date: new Date(2018, 1, 1),
        percentage_solidary_contribution: 0,
      },
      {
        name: "Max Mustermann",
        role_id: 1,
        location_id: 1,
        hiring_date: new Date(2021, 11, 30),
        percentage_solidary_contribution: 0,
      },
    ]);

  }
}

export const db = new AppDB();

