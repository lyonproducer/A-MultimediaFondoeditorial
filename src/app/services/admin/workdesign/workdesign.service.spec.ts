import { TestBed, inject } from '@angular/core/testing';

import { WorkdesignService } from './workdesign.service';

describe('WorkdesignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkdesignService]
    });
  });

  it('should be created', inject([WorkdesignService], (service: WorkdesignService) => {
    expect(service).toBeTruthy();
  }));
});
