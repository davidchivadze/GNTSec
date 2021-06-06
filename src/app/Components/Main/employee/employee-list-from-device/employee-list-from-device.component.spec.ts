import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListFromDeviceComponent } from './employee-list-from-device.component';

describe('EmployeeListFromDeviceComponent', () => {
  let component: EmployeeListFromDeviceComponent;
  let fixture: ComponentFixture<EmployeeListFromDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListFromDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListFromDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
