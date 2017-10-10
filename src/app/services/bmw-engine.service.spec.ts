import { TestBed, inject } from '@angular/core/testing';

import { BMWEngineService } from './bmw-engine.service';

describe('BMWEngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BMWEngineService]
    });
  });

  it('should be created', inject([BMWEngineService], (service: BMWEngineService) => {
    expect(service).toBeTruthy();
  }));
});
