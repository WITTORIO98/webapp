import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopEdgeComponent } from './top-edge.component';

describe('TopEdgeComponent', () => {
  let component: TopEdgeComponent;
  let fixture: ComponentFixture<TopEdgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopEdgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopEdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
