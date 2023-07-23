import { Component } from '@angular/core';

import { liveQuery } from 'dexie';
import { db, Role, Employee } from '../data/db';

@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.scss']
})
export class SkillTreeComponent {

  employee_name = "Peter Bla";
  employee_role = "Test Engineer";

  roles$ = liveQuery(() => db.roles.toArray());

  identifyList(index: number, role: Role) {
    return `${role.id}${role.name}`;
  }
  employee$ = liveQuery(() => db.employees.toArray());

  identifyEmployee(index: number, emp: Employee) {
    if (index == 0) {
      console.log("Bla");
      return `${emp.id}${emp.name}`;
    }

    return "err";
  }

}




