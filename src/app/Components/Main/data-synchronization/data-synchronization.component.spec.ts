import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSynchronizationComponent } from './data-synchronization.component';

describe('DataSynchronizationComponent', () => {
  let component: DataSynchronizationComponent;
  let fixture: ComponentFixture<DataSynchronizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSynchronizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSynchronizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
