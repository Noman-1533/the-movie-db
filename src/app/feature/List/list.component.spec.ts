import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { of } from 'rxjs';

import { ListComponent } from './list.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { RattingComponent } from '../../shared/components/ratting/ratting.component';
import { ListFacadeService } from './services/list-facade.service';
import { SharedFacadeService } from '../../shared/services/shared.facade.service';
import { SharedModule } from '../../shared/shared.module';

import * as ListModel from './models/list-state.model';

import * as MovieListActions from './state/actions/movie-list.actions';
import * as TVListActions from './state/actions/tv-list.actions';
import * as PeopleListActions from './state/actions/tv-list.actions';

import * as MovieListReducers from './state/reducers/movie-list.reducers';
import * as TVListReducers from './state/reducers/tv-list.reducers';
import * as PeopleListReducers from './state/reducers/people-list.reducers';

import * as MovieListSelectors from './state/selectors/movie-list.selectors';
import * as TVListSelectors from './state/selectors/tv-list.selectors';
import * as PeopleListSelectors from './state/selectors/people-list.selectors';
import { listModuleState } from './models/list-state.model';
import { PageCardData } from '../home/model/cardModel';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let store: MockStore;
  let initialMockState:ListModel.listState={
    data: { page: 1, results: [], total_pages: 1, total_results: 1 },
    loading: false,
    error: 'error',
  };
  // const initialState: listModuleState = {
  //   popularMovieList: initialMockState,
  //   nowPlayingMovieList: initialMockState,
  //   upcomingMovieList: initialMockState,
  //   topRattedMovieList: initialMockState,
  //   popularTVList: initialMockState,
  //   airingTodayTVList: initialMockState,
  //   onTVList: initialMockState,
  //   topRattedTVList: initialMockState,
  //   popularPeopleList: initialMockState
  // };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule,
        NoopAnimationsModule,
        FormsModule,
      ],
      declarations: [
        ListComponent,
        FilterComponent,
        CardComponent,
        RattingComponent,
      ],
      providers: [
        ListFacadeService,
        SharedFacadeService,
        provideMockStore({}),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) =>
                key === 'list-type' ? 'mock-type' : 'mock-subtype',
            }),
            queryParamMap: of({
              keys: ['param1', 'param2'],
              get: (key: string) => (key === 'param1' ? 'value1' : 'value2'),
            }),
          },
        },
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // store tests
  describe('Store', () => {
    const state=initialMockState;
    it('should select the popular movie list data', () => {
      expect(MovieListSelectors.selectPopularMovieListData.projector(initialMockState)).toEqual(initialMockState.data)
    });
    // it('should select the popular movie list data', () => {
    //   const selectors = [
    //     { selector: MovieListSelectors.selectPopularMovieListData, expectedValue: state.data },
    //     { selector: MovieListSelectors.selectPopularMovieListLoading, expectedValue: state.loading },
    //     { selector: MovieListSelectors.selectPopularMovieListError, expectedValue: state.error },
    //   ];

    //   selectors.forEach(({ selector, expectedValue }) => {
    //     store.overrideSelector(selector, expectedValue);
    //     store.select(selector).subscribe((value) => {
    //       expect(value).toEqual(expectedValue);
    //     });
    //   });
    // });

    it('should dispatch loadPopularMovieList action on init', () => {
      const spy = spyOn(store, 'dispatch').and.callThrough();

      const action = MovieListActions.loadPopularMovieList({
        data: { type: 'movie', subType: 'popular', queryParams: '' },
      });
      store.dispatch(action);

      expect(spy).toHaveBeenCalledWith(
        MovieListActions.loadPopularMovieList({
          data: { type: 'movie', subType: 'popular', queryParams: '' },
        })
      );
    });
  });

  // Actions tests

  describe('MovieList Actions', () => {
    it('should create loadPopularMovieList action', () => {
      const data: ListModel.listPropsType = { type: 'movie', subType: 'popular', queryParams: '' };
      const action = MovieListActions.loadPopularMovieList({ data });
      expect(action.type).toEqual('[List-Movie] Popular Movie List');
      expect(action.data).toEqual(data);
    });
  
    it('should create loadPopularMovieListSuccess action', () => {
      const data: PageCardData = { page: 1, results: [], total_pages: 1, total_results: 1 };
      const action = MovieListActions.loadPopularMovieListSuccess({ data });
      expect(action.type).toEqual('[List-Movie] Popular Movie List Success');
      expect(action.data).toEqual(data);
    });
  
    it('should create loadPopularMovieListFailure action', () => {
      const error = { message: 'Error' };
      const action = MovieListActions.loadPopularMovieListFailure({ error });
      expect(action.type).toEqual('[List-Movie] Popular Movie List Failure');
      expect(action.error).toEqual(error);
    });
  });

  // reducers tests

  describe('MovieList Reducers', () => {
    it('should return the initial state', () => {
      const  initialState  = ListModel.initialListState;
      const action = { type: 'Unknown' };
      const state = MovieListReducers.popularMovieListReducers(initialState, action);
      expect(state).toBe(initialState);
    });
  
    it('should set loading to true on loadPopularMovieList', () => {
      const action = MovieListActions.loadPopularMovieList({ data: { type: 'movie', subType: 'popular', queryParams: '' } });
      const state = MovieListReducers.popularMovieListReducers(ListModel.initialListState, action);
      expect(state.loading).toEqual(true);
    });
  
    it('should update state on loadPopularMovieListSuccess', () => {
      const data: PageCardData = initialMockState.data;
      const action = MovieListActions.loadPopularMovieListSuccess({ data });
      const state = MovieListReducers.popularMovieListReducers(ListModel.initialListState, action);
      expect(state.loading).toEqual(false);
      expect(state.data).toEqual(data);
    });
  
    it('should set error on loadPopularMovieListFailure', () => {
      const error = initialMockState.error;
      const action = MovieListActions.loadPopularMovieListFailure({ error });
      const state = MovieListReducers.popularMovieListReducers(ListModel.initialListState, action);
      expect(state.loading).toEqual(false);
      expect(state.error).toEqual(error);
    });
  });

  // Selectors tests

  describe('MovieList Selectors', () => {
  
    it('should select the popular movie list data', () => {
      const result = MovieListSelectors.selectPopularMovieListData.projector(initialMockState);
      expect(result).toEqual(initialMockState.data);
    });
  
    it('should select the popular loading state', () => {
      const result = MovieListSelectors.selectPopularMovieListLoading.projector(initialMockState);
      expect(result).toEqual(initialMockState.loading);
    });
  
    it('should select the popular error state', () => {
      const result = MovieListSelectors.selectPopularMovieListError.projector(initialMockState);
      expect(result).toEqual(initialMockState.error);
    });
  });
  
});


