import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePositionsListComponent } from './employee-positions-list.component';

describe('EmployeePositionsListComponent', () => {
  let component: EmployeePositionsListComponent;
  let fixture: ComponentFixture<EmployeePositionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePositionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePositionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
