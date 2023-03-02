import { TestBed } from '@angular/core/testing';

import { SpawnerService } from './spawner.service';

describe('SpawnerService', () => {
  let service: SpawnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpawnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
