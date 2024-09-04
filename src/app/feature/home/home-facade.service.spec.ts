import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeFacadeService } from './home-facade.service';
import { provideMockStore } from '@ngrx/store/testing';

describe('HomeFacadeService', () => {
  let service: HomeFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[provideMockStore({})]
    });
    service = TestBed.inject(HomeFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
