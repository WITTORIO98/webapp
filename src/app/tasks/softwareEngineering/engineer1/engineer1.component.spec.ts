import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Engineer1Component } from './engineer1.component';

describe('Engineer1Component', () => {
  let component: Engineer1Component;
  let fixture: ComponentFixture<Engineer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Engineer1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Engineer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
