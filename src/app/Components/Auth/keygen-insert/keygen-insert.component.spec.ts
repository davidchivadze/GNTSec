import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeygenInsertComponent } from './keygen-insert.component';

describe('KeygenInsertComponent', () => {
  let component: KeygenInsertComponent;
  let fixture: ComponentFixture<KeygenInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeygenInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeygenInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
