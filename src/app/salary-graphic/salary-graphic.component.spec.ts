import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryGraphicComponent } from './salary-graphic.component';

describe('SalaryGraphicComponent', () => {
  let component: SalaryGraphicComponent;
  let fixture: ComponentFixture<SalaryGraphicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryGraphicComponent]
    });
    fixture = TestBed.createComponent(SalaryGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
