import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentMainComponent } from './department-main.component';

describe('DepartmentMainComponent', () => {
  let component: DepartmentMainComponent;
  let fixture: ComponentFixture<DepartmentMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
