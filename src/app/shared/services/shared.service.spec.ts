import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';
import { CardDataService } from '../../feature/home/services/card-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[CardDataService]
    });
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
