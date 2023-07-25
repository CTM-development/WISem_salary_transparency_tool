import Dexie, { Table } from 'dexie';

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
  category_id: number;
  weight: number;
}
export interface SkillCategory {
  id?: number;
  name: String;
  is_hard_skill: boolean;
}

export interface RoleCategoryMapping {
  id?: number;
  role_id: number;
  skill_category_id: number;
  skill_category_weight: number;
  required_amount: number;
}

export interface Location {
  id?: number;
  name: string;
  salary: number;
}

export class AppDB extends Dexie {
  roles!: Table<Role, number>;
  employees!: Table<Employee, number>;
  locations!: Table<Location, number>;
  roleCategoryMapping!: Table<RoleCategoryMapping, number>;
  skills!: Table<Skill, number>;
  skillFulfillments!: Table<SkillFulfillment, number>;
  skillCategory!: Table<SkillCategory, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(9).stores({
      roles: '++id',
      employees: '++id',
      locations: '++id',
      roleCategoryMapping: '++id',
      skills: '++id',
      skillFulfillments: '++id, employee_id',
      skillCategory: "++id",

    });
    this.on('populate', () => this.populate());
  }

  async populate() {

    await db.roles.bulkAdd([
      { //id 1

        salary_min: 50000,
        salary_max: 70000,
        name: "Lead Dev",
      },
      { //id2

        salary_min: 50000,
        salary_max: 70000,
        following_role: 1,
        name: "Senior Dev",
      },
      {
        //id3
        salary_min: 50000,
        salary_max: 70000,
        following_role: 2,
        name: "Junior Dev",
      },
    ]);


    await db.locations.bulkAdd([{ name: "Munich", salary: 20000 }, { name: "Germany", salary: 10000 }, { name: "Switzerland", salary: 250000 }, { name: "Spain", salary: 5000 },]);

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
      {
        name: "John Doe",
        role_id: 3,
        location_id: 2,
        hiring_date: new Date(2022, 11, 30),
        percentage_solidary_contribution: 0,
      },
    ]);


    await db.roleCategoryMapping.bulkAdd([
      {
        role_id: 1,
        skill_category_id: 1,
        skill_category_weight: 6,
        required_amount: 2
      },
      {
        role_id: 1,
        skill_category_id: 2,
        skill_category_weight: 2,
        required_amount: 2
      },



      {
        role_id: 2,
        skill_category_id: 1,
        skill_category_weight: 6,
        required_amount: 2
      },
      {
        role_id: 2,
        skill_category_id: 3,
        skill_category_weight: 4,
        required_amount: 2
      },

      {
        role_id: 3,
        skill_category_id: 1,
        skill_category_weight: 3,
        required_amount: 2
      },
      {
        role_id: 3,
        skill_category_id: 2,
        skill_category_weight: 3,
        required_amount: 2
      },

      {
        role_id: 4,
        skill_category_id: 1,
        skill_category_weight: 3,
        required_amount: 2
      },
      {
        role_id: 4,
        skill_category_id: 3,
        skill_category_weight: 2,
        required_amount: 2
      }
    ]);

    await db.skills.bulkAdd([{
      name: "AWS S3",
      weight: 1,
      category_id: 1,
    },
    {
      name: "Google Cloud storage",
      weight: 1,
      category_id: 1,
    },
    {
      name: "Microsoft Azure",
      weight: 1,
      category_id: 1,
    },
    {
      name: "Hadoop HDFS",
      weight: 1,
      category_id: 1,
    },
    {
      name: "Databrick",
      weight: 1,
      category_id: 2,
    },
    {
      name: "AWS Glue",
      weight: 1,
      category_id: 2,
    },
    {
      name: "Hive",
      weight: 1,
      category_id: 2,
    },

    ]);

    await db.skillCategory.bulkAdd([
      {
        name: "Datalake Storage",
        is_hard_skill: true,
      }
      ,
      {
        name: "Datalake Metadata",
        is_hard_skill: true,
      }
    ]);

    await db.skillFulfillments.bulkAdd([
      {
        employee_id: 1,
        skill_id: 1,
        fulfillment: 2,
      },
      {
        employee_id: 1,
        skill_id: 2,
        fulfillment: 1,
      },
      {
        employee_id: 2,
        skill_id: 1,
        fulfillment: 2,
      },
      {
        employee_id: 1,
        skill_id: 2,
        fulfillment: 1,
      },
      {
        employee_id: 3,
        skill_id: 3,
        fulfillment: 2,
      },
      {
        employee_id: 3,
        skill_id: 4,
        fulfillment: 1,
      },

      {
        employee_id: 4,
        skill_id: 1,
        fulfillment: 1,
      },
      {
        employee_id: 4,
        skill_id: 2,
        fulfillment: 1,
      },

      {
        employee_id: 4,
        skill_id: 3,
        fulfillment: 1,
      },
      {
        employee_id: 4,
        skill_id: 4,
        fulfillment: 1,
      },
      {
        employee_id: 4,
        skill_id: 5,
        fulfillment: 1,
      },
      {
        employee_id: 4,
        skill_id: 6,
        fulfillment: 1,
      },

    ])



  }
}

export const db = new AppDB();

