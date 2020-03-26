import { TestBed } from '@angular/core/testing';

import { DiseaseFinderServiceService } from './disease-finder-service.service';

describe('DiseaseFinderServiceService', () => {
  let service: DiseaseFinderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiseaseFinderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
