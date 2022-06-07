import { TestBed } from '@angular/core/testing';

import { SacServiceService } from './sac-service.service';

describe('SacServiceService', () => {
  let service: SacServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SacServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
