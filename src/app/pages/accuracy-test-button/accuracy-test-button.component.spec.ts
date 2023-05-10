import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuracyTestButtonComponent } from './accuracy-test-button.component';

describe('AccuracyTestButtonComponent', () => {
  let component: AccuracyTestButtonComponent;
  let fixture: ComponentFixture<AccuracyTestButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccuracyTestButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccuracyTestButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
