// src/app/home/state/reducers/popular.reducer.ts
// import { createReducer, on } from '@ngrx/store';
// import * as PopularActions from '../actions/popular.action';

// export interface PopularState {
//   data: any;
//   loading: boolean;
//   error: any;
// }

// export const initialPopularState: PopularState = {
//   data: null,
//   loading: false,
//   error: null,
// };

// export const popularReducer = createReducer(
//   initialPopularState,
//   on(PopularActions.loadPopular, state => ({ ...state, loading: true })),
//   on(PopularActions.loadPopularSuccess, (state, { data }) => ({ ...state, data, loading: false })),
//   on(PopularActions.loadPopularFailure, (state, { error }) => ({ ...state, error, loading: false }))
// );

import { createFeature, createReducer, on } from '@ngrx/store';
import * as PopularActions from '../actions/popular.action';
import { PageCardData } from '../../model/cardModel';

export interface PopularState {
  data: PageCardData | null;
  loading: boolean;
  error: any;
}

export const initialPopularState: PopularState = {
  data: null,
  loading: false,
  error: null
};

 const popularReducer = createReducer(
  initialPopularState,
  on(PopularActions.loadPopular, state => ({ ...state, loading: true })),
  on(PopularActions.loadPopularSuccess, (state, { data }) => ({ ...state, data, loading: false })),
  on(PopularActions.loadPopularFailure, (state, { error }) => ({ ...state, error, loading: false }))
);

export const popularFeature=createFeature(
  {
    name:'popular',
    reducer:popularReducer
  }
);
export const {
  name,
  reducer,
  selectData,
  selectError,
  selectLoading
}=popularFeature