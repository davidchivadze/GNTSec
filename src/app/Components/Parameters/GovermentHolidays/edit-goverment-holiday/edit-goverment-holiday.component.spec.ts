import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGovermentHolidayComponent } from './edit-goverment-holiday.component';

describe('EditGovermentHolidayComponent', () => {
  let component: EditGovermentHolidayComponent;
  let fixture: ComponentFixture<EditGovermentHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGovermentHolidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGovermentHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
