import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalaryGeneratorsComponent } from './edit-salary-generators.component';

describe('EditSalaryGeneratorsComponent', () => {
  let component: EditSalaryGeneratorsComponent;
  let fixture: ComponentFixture<EditSalaryGeneratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSalaryGeneratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSalaryGeneratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
