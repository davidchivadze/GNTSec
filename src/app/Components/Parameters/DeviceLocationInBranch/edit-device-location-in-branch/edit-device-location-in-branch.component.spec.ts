import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeviceLocationInBranchComponent } from './edit-device-location-in-branch.component';

describe('EditDeviceLocationInBranchComponent', () => {
  let component: EditDeviceLocationInBranchComponent;
  let fixture: ComponentFixture<EditDeviceLocationInBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeviceLocationInBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeviceLocationInBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
