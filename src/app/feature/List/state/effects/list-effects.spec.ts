import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { MovieListEffects } from './movie-list.effects';
import * as MovieActions from '../actions/movie-list.actions';
import { ListFacadeService } from '../../services/list-facade.service';
import { PageCardData } from '../../../home/model/cardModel';

describe('MovieListEffects', () => {
  let actions$: Observable<any>;
  let effects: MovieListEffects;
  let listFacadeService: jasmine.SpyObj<ListFacadeService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ListFacadeService', ['getList']);

    TestBed.configureTestingModule({
      providers: [
        MovieListEffects,
        provideMockActions(() => actions$),
        { provide: ListFacadeService, useValue: spy },
      ],
    });

    effects = TestBed.inject(MovieListEffects);
    listFacadeService = TestBed.inject(
      ListFacadeService
    ) as jasmine.SpyObj<ListFacadeService>;
  });

  describe('Popular Movie List effect', () => {
    it('should dispatch loadPopularMovieListSuccess on success', (done) => {
      const mockData: PageCardData = {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 1,
      };

      const action = MovieActions.loadPopularMovieList({
        data: { type: 'movie', subType: 'popular', queryParams: '' },
      });

      const successAction = MovieActions.loadPopularMovieListSuccess({
        data: mockData,
      });

      actions$ = of(action);

      listFacadeService.getList.and.returnValue(of(mockData));

      effects.loadPopularMovieList$.subscribe((result) => {
        expect(result).toEqual(successAction);
        done();
      });
    });

    it('should dispatch loadPopularMovieListFailure on failure', (done) => {
      const action = MovieActions.loadPopularMovieList({
        data: { type: 'movie', subType: 'popular', queryParams: '' },
      });

      const error = 'error';

      const failureAction = MovieActions.loadPopularMovieListFailure({ error });

      actions$ = of(action);

      listFacadeService.getList.and.returnValue(throwError(() => error));

      effects.loadPopularMovieList$.subscribe((result) => {
        expect(result).toEqual(failureAction);
        done();
      });
    });
  });
});
