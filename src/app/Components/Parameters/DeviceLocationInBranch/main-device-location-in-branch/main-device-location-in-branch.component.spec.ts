import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDeviceLocationInBranchComponent } from './main-device-location-in-branch.component';

describe('MainDeviceLocationInBranchComponent', () => {
  let component: MainDeviceLocationInBranchComponent;
  let fixture: ComponentFixture<MainDeviceLocationInBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDeviceLocationInBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDeviceLocationInBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
