import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicDiscoComponent } from './classic-disco.component';

describe('ClassicDiscoComponent', () => {
  let component: ClassicDiscoComponent;
  let fixture: ComponentFixture<ClassicDiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicDiscoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassicDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
