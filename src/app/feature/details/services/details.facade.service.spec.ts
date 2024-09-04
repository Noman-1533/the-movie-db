import { TestBed } from '@angular/core/testing';

import { DetailsFacadeService } from './details.facade.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DetailsService } from './details.service';
import { provideMockStore } from '@ngrx/store/testing';
import { SharedFacadeService } from '../../../shared/services/shared.facade.service';

describe('MovieDetailsFacadeService', () => {
  let service: DetailsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[SharedFacadeService,DetailsService,provideMockStore({})],
    });
    service = TestBed.inject(DetailsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
