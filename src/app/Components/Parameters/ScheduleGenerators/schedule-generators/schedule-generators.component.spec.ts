import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleGeneratorsComponent } from './schedule-generators.component';

describe('ScheduleGeneratorsComponent', () => {
  let component: ScheduleGeneratorsComponent;
  let fixture: ComponentFixture<ScheduleGeneratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleGeneratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleGeneratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
