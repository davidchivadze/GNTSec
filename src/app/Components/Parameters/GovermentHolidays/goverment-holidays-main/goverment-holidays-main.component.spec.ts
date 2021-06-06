import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovermentHolidaysMainComponent } from './goverment-holidays-main.component';

describe('GovermentHolidaysMainComponent', () => {
  let component: GovermentHolidaysMainComponent;
  let fixture: ComponentFixture<GovermentHolidaysMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovermentHolidaysMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovermentHolidaysMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
