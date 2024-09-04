// src/app/state/reducers/trending.reducer.ts
// import { createReducer, on } from '@ngrx/store';
// import * as TrendingActions from '../actions/trending.action';

// export interface TrendingState {
//   data: any;
//   loading: boolean;
//   error: any;
// }

// export const initialState: TrendingState = {
//   data: null,
//   loading: false,
//   error: null
// };

// export const trendingReducer = createReducer(
//   initialState,
//   on(TrendingActions.loadTrending, state => ({ ...state, loading: true })),
//   on(TrendingActions.loadTrendingSuccess, (state, { data }) => ({ ...state, data, loading: false })),
//   on(TrendingActions.loadTrendingFailure, (state, { error }) => ({ ...state, error, loading: false }))
// );

import { createFeature, createReducer, on } from '@ngrx/store';
import * as TrendingActions from '../actions/trending.action';
import { PageCardData } from '../../model/cardModel';

export interface TrendingState {
  data: PageCardData | null;
  loading: boolean;
  error: any;
}

export const initialTrendingState: TrendingState = {
  data: null,
  loading: false,
  error: null
};

 const trendingReducer = createReducer(
  initialTrendingState,
  on(TrendingActions.loadTrending, state => ({ ...state, loading: true })),
  on(TrendingActions.loadTrendingSuccess, (state, { data }) => ({ ...state, data, loading: false })),
  on(TrendingActions.loadTrendingFailure, (state, { error }) => ({ ...state, error, loading: false }))
);

export const trendingFeature=createFeature({
  name:'trending',
  reducer:trendingReducer
});
export const{
  name,
  reducer,
  selectData,
  selectLoading,
  selectError
}=trendingFeature