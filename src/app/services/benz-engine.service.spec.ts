import { TestBed, inject } from '@angular/core/testing';

import { BENZEngineService } from './benz-engine.service';

describe('BENZEngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BENZEngineService]
    });
  });

  it('should be created', inject([BENZEngineService], (service: BENZEngineService) => {
    expect(service).toBeTruthy();
  }));
});
