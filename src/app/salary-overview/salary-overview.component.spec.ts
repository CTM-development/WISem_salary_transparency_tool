import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryOverviewComponent } from './salary-overview.component';

describe('SalaryOverviewComponent', () => {
  let component: SalaryOverviewComponent;
  let fixture: ComponentFixture<SalaryOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryOverviewComponent]
    });
    fixture = TestBed.createComponent(SalaryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
