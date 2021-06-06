import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeviceLogComponent } from './edit-device-log.component';

describe('EditDeviceLogComponent', () => {
  let component: EditDeviceLogComponent;
  let fixture: ComponentFixture<EditDeviceLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeviceLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeviceLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
