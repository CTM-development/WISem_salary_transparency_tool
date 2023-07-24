import Dexie, { Table } from 'dexie';

export interface Employee {
  id?: number;
  location_id: number;
  role_id: number;
  name: string;
  hired_since: number;
  percentage_solidary_contribution: number;
}
export interface Role {
  id?: number;
  name: string;
  salary_min: number;
  salary_max: number;
  following_role?: number;
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
        hired_since: Date.parse("01.01.2020"),
        percentage_solidary_contribution: 0,

      },
      {
        name: "Maxle Muster",
        role_id: 2,
        location_id: 1,
        hired_since: Date.parse("01.01.2018"),
        percentage_solidary_contribution: 0,
      },
      {
        name: "Max Mustermann",
        role_id: 1,
        location_id: 1,
        hired_since: Date.parse("01.01.2023"),
        percentage_solidary_contribution: 0,
      },
    ]);

  }


}

export const db = new AppDB();

