import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModReportComponent } from './mod-report.component';

describe('ModReportComponent', () => {
  let component: ModReportComponent;
  let fixture: ComponentFixture<ModReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
