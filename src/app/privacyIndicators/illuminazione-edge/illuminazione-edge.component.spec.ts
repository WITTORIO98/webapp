import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlluminazioneEdgeComponent } from './illuminazione-edge.component';

describe('IlluminazioneEdgeComponent', () => {
  let component: IlluminazioneEdgeComponent;
  let fixture: ComponentFixture<IlluminazioneEdgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlluminazioneEdgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlluminazioneEdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
