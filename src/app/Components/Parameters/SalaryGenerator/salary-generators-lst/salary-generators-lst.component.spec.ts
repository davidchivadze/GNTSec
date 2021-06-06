import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryGeneratorsLstComponent } from './salary-generators-lst.component';

describe('SalaryGeneratorsLstComponent', () => {
  let component: SalaryGeneratorsLstComponent;
  let fixture: ComponentFixture<SalaryGeneratorsLstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryGeneratorsLstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryGeneratorsLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
