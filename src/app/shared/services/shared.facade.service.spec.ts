import { TestBed } from '@angular/core/testing';

import { SharedFacadeService } from './shared.facade.service';
import { SharedService } from './shared.service';
import { DetailsFacadeService } from '../../feature/details/services/details.facade.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SharedFacadeService', () => {
  let service: SharedFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[SharedService,DetailsFacadeService]
    });
    service = TestBed.inject(SharedFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
