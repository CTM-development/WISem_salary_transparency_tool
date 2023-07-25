import { Component } from '@angular/core';

dynamic_salary: ;

@Component({
  selector: 'app-salary-overview-information',
  templateUrl: './salary-overview-information.component.html',
  styleUrls: ['./salary-overview-information.component.scss']
})
export class SalaryOverviewInformationComponent {

  static_salary: number = 52500;
  dynamic_salary: number = 15000;
}
