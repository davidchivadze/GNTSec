import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalaryGeneratorsComponent } from './add-salary-generators.component';

describe('AddSalaryGeneratorsComponent', () => {
  let component: AddSalaryGeneratorsComponent;
  let fixture: ComponentFixture<AddSalaryGeneratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSalaryGeneratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSalaryGeneratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
