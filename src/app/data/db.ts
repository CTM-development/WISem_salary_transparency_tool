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

        salary_min: 70000,
        salary_max: 90000,
        name: "Lead Data Product Manager",
      },
      { //id2

        salary_min: 50000,
        salary_max: 70000,
        following_role: 1,
        name: "Medium Data Product Manager",
      },
      {
        //id3
        salary_min: 25000,
        salary_max: 45000,
        following_role: 2,
        name: "Junior Data Product Manager",
      },
    ]);


    await db.locations.bulkAdd([{ name: "Munich", salary: 5000 }, { name: "Nuremberg", salary: 2500 }, { name: "Germany", salary: 2000 }, { name: "Switzerland", salary: 7500 }, { name: "Spain", salary: 1000 },]);

    await db.employees.bulkAdd([
      {
        name: "Max Muster",
        role_id: 1,
        location_id: 1,
        hiring_date: new Date(2020, 12, 12),
        percentage_solidary_contribution: 0,

      },
      {
        name: "Maxim Muster",
        role_id: 2,
        location_id: 1,
        hiring_date: new Date(2018, 1, 1),
        percentage_solidary_contribution: 0,
      },
      {
        name: "John Doe",
        role_id: 1,
        location_id: 1,
        hiring_date: new Date(2021, 11, 30),
        percentage_solidary_contribution: 0,
      },
      {
        name: "Max Mustermann",
        role_id: 3,
        location_id: 2,
        hiring_date: new Date(2019, 11, 30),
        percentage_solidary_contribution: 0,
      },
    ]);


    await db.roleCategoryMapping.bulkAdd([




      {
        role_id: 2,
        skill_category_id: 1,
        skill_category_weight: 40,
        required_amount: 40
      },
      {
        role_id: 3,
        skill_category_id: 2,
        skill_category_weight: 20,
        required_amount: 2
      },

      {
        role_id: 3,
        skill_category_id: 1,
        skill_category_weight: 20,
        required_amount: 2
      },
      {
        role_id: 3,
        skill_category_id: 3,
        skill_category_weight: 20,
        required_amount: 2
      },

      {
        role_id: 3,
        skill_category_id: 4,
        skill_category_weight: 20,
        required_amount: 2
      },
      {
        role_id: 3,
        skill_category_id: 7,
        skill_category_weight: 20,
        required_amount: 16 //for softskills
      },
      {
        role_id: 3,
        skill_category_id: 6,
        skill_category_weight: 20,
        required_amount: 16
      },

    ]);

    await db.skills.bulkAdd([{
      name: "AWS S3",
      weight: 10,
      category_id: 1,
    },
    {
      name: "Google Cloud storage",
      weight: 10,
      category_id: 1,
    },
    {
      name: "Microsoft Azure",
      weight: 10,
      category_id: 1,
    },
    {
      name: "Hadoop HDFS",
      weight: 10,
      category_id: 1,
    },
    {
      name: "Databrick",
      weight: 10,
      category_id: 2,
    },
    {
      name: "AWS Glue",
      weight: 10,
      category_id: 2,
    },
    {
      name: "Hive",
      weight: 10,
      category_id: 2,
    },
    {
      name: "Communication Skills",
      weight: 10,
      category_id: 3,
    },
    {
      name: "Leading Skills",
      weight: 10,
      category_id: 4,
    },
    {
      name: "Teamwork",
      weight: 10,
      category_id: 5,
    },
    {
      name: "...",
      weight: 10,
      category_id: 6,
    },
    {
      name: "...",
      weight: 10,
      category_id: 7,
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
      },
      {
        name: "Communication Skills",
        is_hard_skill: false,
      },
      {
        name: "Leading Skills",
        is_hard_skill: false,
      },
      {
        name: "Teamwork",
        is_hard_skill: false,
      },
      {
        name: "...",
        is_hard_skill: true,
      },
      {
        name: "...",
        is_hard_skill: false,
      },
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
        fulfillment: 0,
      },
      {
        employee_id: 4,
        skill_id: 2,
        fulfillment: 3,
      },

      {
        employee_id: 4,
        skill_id: 3,
        fulfillment: 3,
      },
      {
        employee_id: 4,
        skill_id: 4,
        fulfillment: 3,
      },
      {
        employee_id: 4,
        skill_id: 5,
        fulfillment: 4,
      },
      {
        employee_id: 4,
        skill_id: 6,
        fulfillment: 3,
      },
      {
        employee_id: 4,
        skill_id: 7,
        fulfillment: 4,
      },
      {
        employee_id: 4,
        skill_id: 8,
        fulfillment: 4,
      },
      {
        employee_id: 4,
        skill_id: 10,
        fulfillment: 4,
      },
      {
        employee_id: 4,
        skill_id: 11,
        fulfillment: 4,
      },
      {
        employee_id: 4,
        skill_id: 12,
        fulfillment: 3,
      },

    ])



  }


  async loadRoles() {
    try {
      return await db.roles.toArray();
    } catch (error) {
      console.error('Error retrieving roles:', error);
      return null;
    }
  }

  async loadCategories() {
    try {
      return await db.skillCategory.toArray();
    } catch (error) {
      console.error('Error retrieving categories:', error);
      return null;
    }
  }

  async loadSkills() {
    try {
      return await db.skills.toArray();
    } catch (error) {
      console.error('Error retrieving skills:', error);
      return null;
    }
  }


  async loadCategoryRoleMapping() {
    try {
      return await db.roleCategoryMapping.toArray();
    } catch (error) {
      console.error('Error retrieving Role Mapping:', error);
      return null;
    }
  }


  async loadRoleCategoryMapping() {
    try {
      return await db.roleCategoryMapping.toArray();
    } catch (error) {
      console.error('Error retrieving Role Skill Mapping:', error);
      return null;
    }
  }
  async loadLocations() {
    try {
      return await db.locations.toArray();
    } catch (error) {
      console.error('Error retrieving Locations:', error);
      return null;
    }
  }

  async loadfulfillment(employee_id: number) {
    try {
      return await db.skillFulfillments.where("employee_id").equals(employee_id).toArray();
    } catch (error) {
      console.error('Error retrieving Skill Fulfillment:', error);
      return null;
    }
  }


  async loadEmployee(id: number) {
    try {
      return await db.employees.where("id").equals(id).toArray();
    } catch (error) {
      console.error('Error retrieving employees:', error);
      return null;
    }
  }

	async loadLocation(id: number) {
    try {
      return await db.locations.where("id").equals(id).toArray();
    } catch (error) {
      console.error('Error retrieving locations:', error);
      return null;
    }
  }

	async loadRole(id: number) {
    try {
      return await db.roles.where("id").equals(id).toArray();
    } catch (error) {
      console.error('Error retrieving roles:', error);
      return null;
    }
  }


}

export const db = new AppDB();
