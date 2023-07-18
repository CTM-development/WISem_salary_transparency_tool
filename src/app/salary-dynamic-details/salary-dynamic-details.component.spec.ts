import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDynamicDetailsComponent } from './salary-dynamic-details.component';

describe('SalaryDynamicDetailsComponent', () => {
  let component: SalaryDynamicDetailsComponent;
  let fixture: ComponentFixture<SalaryDynamicDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryDynamicDetailsComponent]
    });
    fixture = TestBed.createComponent(SalaryDynamicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
