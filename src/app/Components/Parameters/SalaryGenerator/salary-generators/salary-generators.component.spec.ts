import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryGeneratorsComponent } from './salary-generators.component';

describe('SalaryGeneratorsComponent', () => {
  let component: SalaryGeneratorsComponent;
  let fixture: ComponentFixture<SalaryGeneratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryGeneratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryGeneratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
