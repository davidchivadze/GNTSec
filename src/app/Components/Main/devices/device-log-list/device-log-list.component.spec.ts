import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceLogListComponent } from './device-log-list.component';

describe('DeviceLogListComponent', () => {
  let component: DeviceLogListComponent;
  let fixture: ComponentFixture<DeviceLogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceLogListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
