import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceLocationInBranchComponent } from './add-device-location-in-branch.component';

describe('AddDeviceLocationInBranchComponent', () => {
  let component: AddDeviceLocationInBranchComponent;
  let fixture: ComponentFixture<AddDeviceLocationInBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeviceLocationInBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeviceLocationInBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
