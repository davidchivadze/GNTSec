import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceLocationInBranchListComponent } from './device-location-in-branch-list.component';

describe('DeviceLocationInBranchListComponent', () => {
  let component: DeviceLocationInBranchListComponent;
  let fixture: ComponentFixture<DeviceLocationInBranchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceLocationInBranchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceLocationInBranchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
