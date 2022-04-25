import { TestBed } from '@angular/core/testing';

import { ChampionDetailService } from './champion-detail.service';

describe('ChampionDetailService', () => {
  let service: ChampionDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
