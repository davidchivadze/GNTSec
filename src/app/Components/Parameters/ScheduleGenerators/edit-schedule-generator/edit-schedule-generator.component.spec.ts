import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScheduleGeneratorComponent } from './edit-schedule-generator.component';

describe('EditScheduleGeneratorComponent', () => {
  let component: EditScheduleGeneratorComponent;
  let fixture: ComponentFixture<EditScheduleGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditScheduleGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditScheduleGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
