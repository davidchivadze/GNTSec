import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceLogComponent } from './add-device-log.component';

describe('AddDeviceLogComponent', () => {
  let component: AddDeviceLogComponent;
  let fixture: ComponentFixture<AddDeviceLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeviceLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeviceLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
