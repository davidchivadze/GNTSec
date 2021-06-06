import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGovermentHolidayComponent } from './add-goverment-holiday.component';

describe('AddGovermentHolidayComponent', () => {
  let component: AddGovermentHolidayComponent;
  let fixture: ComponentFixture<AddGovermentHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGovermentHolidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGovermentHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
