import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendReportsComponent } from './send-reports.component';

describe('SendReportsComponent', () => {
  let component: SendReportsComponent;
  let fixture: ComponentFixture<SendReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
