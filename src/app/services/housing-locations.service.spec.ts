import { TestBed } from '@angular/core/testing';

import { HousingLocationsService } from './housing-locations.service';

describe('HousingLocationsService', () => {
  let service: HousingLocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousingLocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
