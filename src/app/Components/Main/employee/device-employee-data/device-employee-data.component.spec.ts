import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceEmployeeDataComponent } from './device-employee-data.component';

describe('DeviceEmployeeDataComponent', () => {
  let component: DeviceEmployeeDataComponent;
  let fixture: ComponentFixture<DeviceEmployeeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceEmployeeDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceEmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
