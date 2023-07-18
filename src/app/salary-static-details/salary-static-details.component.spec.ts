import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryStaticDetailsComponent } from './salary-static-details.component';

describe('SalaryStaticDetailsComponent', () => {
  let component: SalaryStaticDetailsComponent;
  let fixture: ComponentFixture<SalaryStaticDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryStaticDetailsComponent]
    });
    fixture = TestBed.createComponent(SalaryStaticDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
