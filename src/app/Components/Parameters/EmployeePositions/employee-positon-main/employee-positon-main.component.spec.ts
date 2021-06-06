import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePositonMainComponent } from './employee-positon-main.component';

describe('EmployeePositonMainComponent', () => {
  let component: EmployeePositonMainComponent;
  let fixture: ComponentFixture<EmployeePositonMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePositonMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePositonMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
