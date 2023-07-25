import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryOverviewInformationComponent } from './salary-overview-information.component';

describe('SalaryOverviewInformationComponent', () => {
  let component: SalaryOverviewInformationComponent;
  let fixture: ComponentFixture<SalaryOverviewInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryOverviewInformationComponent]
    });
    fixture = TestBed.createComponent(SalaryOverviewInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
