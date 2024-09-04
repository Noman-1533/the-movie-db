import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { StaticSearchComponent } from './components/static-search/static-search.component';
import { HomePageContainerComponent } from './components/home-page-container/home-page-container.component';
import { HomeFacadeService } from './home-facade.service';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { MultiCardComponent } from '../../shared/components/multi-card/multi-card.component';
import { SwitchableButtonComponent } from '../../shared/components/switchable-button/switchable-button.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { RattingComponent } from '../../shared/components/ratting/ratting.component';

import { PageCardData } from './model/cardModel';
import * as fromPopular from './state/reducers/popular.reducer';
import * as PopularActions from './state/actions/popular.action';
import {
  reducer as popularReducer,
  initialPopularState,
} from './state/reducers/popular.reducer';

import * as TrendingActions from './state/actions/trending.action';
import * as fromTrending from './state/reducers/trending.reducer';
import {
  reducer as trendingReducer,
  initialTrendingState,
} from './state/reducers/trending.reducer';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore;

  const initialState = { popular: fromPopular.initialPopularState };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [
        HomeComponent,
        StaticSearchComponent,
        HomePageContainerComponent,
        ContainerComponent,
        MultiCardComponent,
        SwitchableButtonComponent,
        CardComponent,
        RattingComponent,
      ],
      providers: [
        HomeFacadeService,
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }), // Mock route parameters
            snapshot: { paramMap: { get: (key: string) => '123' } }, // Mock snapshot
          },
        },
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // store tests

  describe('Store', () => {
    it('should select popular data from store', () => {
      store.setState({
        popular: {
          data: { page: 1, results: [], total_pages: 1, total_results: 1 },
          loading: false,
          error: null,
        },
      });
      component.ngOnInit();
      store.select(fromPopular.selectData).subscribe((data) => {
        expect(data).toEqual({
          page: 1,
          results: [],
          total_pages: 1,
          total_results: 1,
        });
      });
      store.select(fromPopular.selectLoading).subscribe((loading) => {
        expect(loading).toEqual(false);
      });
      store.select(fromPopular.selectError).subscribe((error) => {
        expect(error).toEqual(null);
      });
    });
  });

  // action test

  describe('Popular Actions', () => {
    it('should create a loadPopular action with the correct data', () => {
      const data = 'some data';
      const action = PopularActions.loadPopular({ data });
      expect(action.type).toEqual('[Popular] Load Popular');
      expect(action.data).toEqual(data);
    });

    it('should create a loadPopularSuccess action with the correct payload', () => {
      const data: PageCardData = {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 1,
      };
      const action = PopularActions.loadPopularSuccess({ data });
      expect(action.type).toEqual('[Popular] Load Popular Success');
      expect(action.data).toEqual(data);
    });

    it('should create a loadPopularFailure action with the correct error', () => {
      const error = 'some error';
      const action = PopularActions.loadPopularFailure({ error });
      expect(action.type).toEqual('[Popular] Load Popular Failure');
      expect(action.error).toEqual(error);
    });
  });
  describe('Trending Actions', () => {
    it('Should create a loadTrending Actions with correct data', () => {
      const data = 'trending data';
      const action = TrendingActions.loadTrending({ data });
      expect(action.type).toEqual('[Trending] Load Trending');
      expect(action.data).toEqual(data);
    });
    it('Should create a loadTrendingSuccess with correct payload data', () => {
      const data: PageCardData = {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 1,
      };
      const action = TrendingActions.loadTrendingSuccess({ data });
      expect(action.type).toEqual('[Trending] Load Trending Success');
      expect(action.data).toEqual(data);
    });
    it('Should create loadTrendingFailure with correct error', () => {
      const error = 'trending error';
      const action = TrendingActions.loadTrendingFailure({ error });
      expect(action.type).toEqual('[Trending] Load Trending Failure');
      expect(action.error).toEqual(error);
    });
  });

  // reducer test

  describe('Popular Reducer', () => {
    it('should return the initial state for an unknown action', () => {
      const action = { type: 'Unknown' } as any;
      const state = popularReducer(initialPopularState, action);

      expect(state).toBe(initialPopularState);
    });

    it('should set loading to true on loadPopular action', () => {
      const action = PopularActions.loadPopular({ data: 'test' });
      const state = popularReducer(initialPopularState, action);

      expect(state.loading).toBe(true);
    });

    it('should update the state correctly on loadPopularSuccess action', () => {
      const data: PageCardData = {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 1,
      };
      const action = PopularActions.loadPopularSuccess({ data });
      const state = popularReducer(initialPopularState, action);

      expect(state.loading).toBe(false);
      expect(state.data).toEqual(data);
    });

    it('should set loading to false and store error on loadPopularFailure action', () => {
      const error = 'some error';
      const action = PopularActions.loadPopularFailure({ error });
      const state = popularReducer(initialPopularState, action);

      expect(state.loading).toBe(false);
      expect(state.error).toEqual(error);
    });
  });

  describe('Trending Reducers', () => {
    it('Should return the initial state for unknown actions', () => {
      const action = { type: 'Unknown' } as any;
      const state = trendingReducer(initialTrendingState, action);
      expect(state).toBe(initialTrendingState);
    });
    it('Should set the loading to true on loadTrending action', () => {
      const action = TrendingActions.loadTrending;
      const state = trendingReducer(initialTrendingState, action);
      expect(state).not.toBe(initialTrendingState);
      expect(state.loading).toBe(true);
    });
    it('Should update the state correctly on loadTrendingSuccess action', () => {
      const data: PageCardData = {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 1,
      };
      const action = TrendingActions.loadTrendingSuccess({ data });
      const state = trendingReducer(initialTrendingState, action);
      expect(state.loading).toBe(false);
      expect(state.data).toBe(data);
    });
    it('Should update the state with the error on loadTrendingFailure action', () => {
      const error: any = 'Trending error';
      const action = TrendingActions.loadTrendingFailure({ error });
      const state = trendingReducer(initialTrendingState, action);
      expect(state.loading).toBe(false);
      expect(state.error).toBe(error);
    });
  });

  // selector test

  describe('Popular Selectors', () => {
    it('should select the data from the state', () => {
      const data: PageCardData = {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 1,
      };
      const state: fromPopular.PopularState = {
        data,
        loading: false,
        error: null,
      };

      expect(fromPopular.selectData.projector(state)).toEqual(data);
    });

    it('should select the loading status from the state', () => {
      const state: fromPopular.PopularState = {
        data: null,
        loading: true,
        error: null,
      };

      expect(fromPopular.selectLoading.projector(state)).toEqual(true);
    });

    it('should select the error from the state', () => {
      const error = 'some error';
      const state: fromPopular.PopularState = {
        data: null,
        loading: false,
        error,
      };

      expect(fromPopular.selectError.projector(state)).toEqual(error);
    });
  });
  describe('Trending Selectors', () => {
    it('should select data from the state', () => {
      const data: PageCardData = {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 1,
      };
      const state: fromTrending.TrendingState = {
        data,
        loading: false,
        error: null,
      };
      expect(fromTrending.selectData.projector(state)).toEqual(data);
    });
    it('should select loading from the state', () => {
      const state: fromTrending.TrendingState = {
        data: null,
        loading: true,
        error: null,
      };
      expect(fromTrending.selectLoading.projector(state)).toEqual(true);
    });
    it('should select error form the state', () => {
      const error: any = 'trending error';
      const state: fromTrending.TrendingState = {
        data: null,
        loading: false,
        error: error,
      };
      expect(fromTrending.selectError.projector(state)).toEqual(error);
    });
  });
});
