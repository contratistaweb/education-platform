import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaryModalComponent } from './temary-modal.component';

describe('TemaryModalComponent', () => {
  let component: TemaryModalComponent;
  let fixture: ComponentFixture<TemaryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
