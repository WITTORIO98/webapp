import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacySurveyComponent } from './privacy-survey.component';

describe('PrivacySurveyComponent', () => {
  let component: PrivacySurveyComponent;
  let fixture: ComponentFixture<PrivacySurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacySurveyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacySurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
