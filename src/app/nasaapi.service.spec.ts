import { TestBed } from '@angular/core/testing';

import { NasaapiService } from './nasaapi.service';

describe('NasaapiService', () => {
  let service: NasaapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
