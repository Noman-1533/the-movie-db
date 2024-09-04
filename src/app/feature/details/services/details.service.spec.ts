import { TestBed } from '@angular/core/testing';

import { DetailsService } from './details.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetailsService', () => {
  let service: DetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(DetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
