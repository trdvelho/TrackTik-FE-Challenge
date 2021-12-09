import { TestBed } from '@angular/core/testing';

import { TracktikApiService } from './tracktik-api.service';

describe('TracktikApiService', () => {
  let service: TracktikApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TracktikApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
