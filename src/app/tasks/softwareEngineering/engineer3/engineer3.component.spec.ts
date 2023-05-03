import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Engineer3Component } from './engineer3.component';

describe('Engineer3Component', () => {
  let component: Engineer3Component;
  let fixture: ComponentFixture<Engineer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Engineer3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Engineer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
