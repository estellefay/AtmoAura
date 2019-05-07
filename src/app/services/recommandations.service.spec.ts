import { TestBed } from '@angular/core/testing';

import { RecommandationsService } from './recommandations.service';

describe('RecommandationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecommandationsService = TestBed.get(RecommandationsService);
    expect(service).toBeTruthy();
  });
});
