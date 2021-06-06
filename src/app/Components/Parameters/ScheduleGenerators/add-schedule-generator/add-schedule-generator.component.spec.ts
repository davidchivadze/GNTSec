import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScheduleGeneratorComponent } from './add-schedule-generator.component';

describe('AddScheduleGeneratorComponent', () => {
  let component: AddScheduleGeneratorComponent;
  let fixture: ComponentFixture<AddScheduleGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScheduleGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScheduleGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
