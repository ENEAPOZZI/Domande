import { TestBed } from '@angular/core/testing';

import { DomandeServiceService } from './domande-service.service';

describe('DomandeServiceService', () => {
  let service: DomandeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomandeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
