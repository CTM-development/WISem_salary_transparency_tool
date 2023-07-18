import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryOverviewGraphicComponent } from './salary-overview-graphic.component';

describe('SalaryOverviewGraphicComponent', () => {
  let component: SalaryOverviewGraphicComponent;
  let fixture: ComponentFixture<SalaryOverviewGraphicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryOverviewGraphicComponent]
    });
    fixture = TestBed.createComponent(SalaryOverviewGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
