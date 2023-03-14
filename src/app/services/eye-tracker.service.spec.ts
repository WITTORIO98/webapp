import { TestBed } from '@angular/core/testing';

import { EyeTrackerService } from './eye-tracker.service';

describe('EyeTrackerService', () => {
  let service: EyeTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EyeTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
