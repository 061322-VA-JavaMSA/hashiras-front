import { TestBed } from '@angular/core/testing';

import { AnimelistService } from './animelist.service';

describe('AnimelistService', () => {
  let service: AnimelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
