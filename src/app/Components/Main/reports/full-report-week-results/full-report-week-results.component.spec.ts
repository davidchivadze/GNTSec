import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullReportWeekResultsComponent } from './full-report-week-results.component';

describe('FullReportWeekResultsComponent', () => {
  let component: FullReportWeekResultsComponent;
  let fixture: ComponentFixture<FullReportWeekResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullReportWeekResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullReportWeekResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
