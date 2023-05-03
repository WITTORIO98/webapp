import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Engineer2Component } from './engineer2.component';

describe('Engineer2Component', () => {
  let component: Engineer2Component;
  let fixture: ComponentFixture<Engineer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Engineer2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Engineer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
