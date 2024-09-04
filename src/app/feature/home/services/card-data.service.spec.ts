import { TestBed } from '@angular/core/testing';

import { CardDataService } from './card-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CardDataService', () => {
  let service: CardDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(CardDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
