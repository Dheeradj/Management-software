import { TestBed } from '@angular/core/testing';

import { LeverancierService } from './leverancier.service';

describe('LeverancierService', () => {
  let service: LeverancierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeverancierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
