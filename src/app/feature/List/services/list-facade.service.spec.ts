import { TestBed } from '@angular/core/testing';

import { ListFacadeService } from './list-facade.service';
import { ListService } from './list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('ListFacadeService', () => {
  let service: ListFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ListService,provideMockStore({})]
    });
    service = TestBed.inject(ListFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
