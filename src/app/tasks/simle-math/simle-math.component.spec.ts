import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimleMathComponent } from './simle-math.component';

describe('SimleMathComponent', () => {
  let component: SimleMathComponent;
  let fixture: ComponentFixture<SimleMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimleMathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimleMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
