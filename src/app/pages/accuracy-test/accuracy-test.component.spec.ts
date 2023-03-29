import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuracyTestComponent } from './accuracy-test.component';

describe('AccuracyTestComponent', () => {
  let component: AccuracyTestComponent;
  let fixture: ComponentFixture<AccuracyTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccuracyTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccuracyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
