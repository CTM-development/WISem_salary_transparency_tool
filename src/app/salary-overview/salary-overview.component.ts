import { Component } from '@angular/core';

@Component({
  selector: 'app-salary-overview',
  templateUrl: './salary-overview.component.html',
  styleUrls: ['./salary-overview.component.scss']
})
export class SalaryOverviewComponent {
  animal = "";
  onSave() {

    this.animal = "Lion";
  }


  name = "Test";

}
