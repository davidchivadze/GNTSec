import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleGeneratorsListComponent } from './schedule-generators-list.component';

describe('ScheduleGeneratorsListComponent', () => {
  let component: ScheduleGeneratorsListComponent;
  let fixture: ComponentFixture<ScheduleGeneratorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleGeneratorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleGeneratorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
