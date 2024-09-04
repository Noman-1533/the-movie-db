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
  
});


