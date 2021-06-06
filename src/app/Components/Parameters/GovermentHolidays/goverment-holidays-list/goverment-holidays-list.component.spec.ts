import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovermentHolidaysListComponent } from './goverment-holidays-list.component';

describe('GovermentHolidaysListComponent', () => {
  let component: GovermentHolidaysListComponent;
  let fixture: ComponentFixture<GovermentHolidaysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovermentHolidaysListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovermentHolidaysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
