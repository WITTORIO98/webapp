import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackGameComponent } from './stack-game.component';

describe('StackGameComponent', () => {
  let component: StackGameComponent;
  let fixture: ComponentFixture<StackGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
