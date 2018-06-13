import { TestBed, inject } from '@angular/core/testing';

import { SampleTestService } from './sample-test.service';

describe('SampleTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleTestService]
    });
  });

  it('should be created', inject([SampleTestService], (service: SampleTestService) => {
    expect(service).toBeTruthy();
  }));
});
