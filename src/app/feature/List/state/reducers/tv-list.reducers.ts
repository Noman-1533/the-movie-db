import { createReducer, on } from '@ngrx/store';

import * as TVListAction from '../actions/tv-list.actions';
import { initialListState } from '../../models/list-state.model';

export const popularTVListReducers = createReducer(
  initialListState,
  on(TVListAction.loadPopularTVList, (state) => ({ ...state, loading: true })),
  on(TVListAction.loadPopularTVListSuccess, (state, { data }) => ({
    ...state,
    data
    
    ,
    loading: false,
  })),
  on(TVListAction.loadPopularTVListFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  })),
  on(TVListAction.loadMorePopularTVList,state=>({...state,loading:true})),
  on(TVListAction.loadMorePopularTVListSuccess,(state,{data})=>({
    ...state,
    loading:false,
    data:{
      ...state.data,
      results:[...state.data.results,...data.results]
    }
  })),
  on(TVListAction.loadMorePopularTVListFailure,(state,{error})=>({
    ...state,
    loading:false,
    error:error
  }))
);

export const airingTodayTVListReducers = createReducer(
  initialListState,
  on(TVListAction.loadAiringTodayTVList, (state) => ({
    ...state,
    loading: true,
  })),
  on(TVListAction.loadAiringTodayTVListSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(TVListAction.loadAiringTodayTVListFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  })),
  on(TVListAction.loadMoreAiringTodayTVList, (state) => ({
    ...state,
    loading: true,
  })),
  on(TVListAction.loadMoreAiringTodayTVListSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data: {
      ...state.data,
      results: [...state.data.results, ...data.results],
    },
  })),
  on(TVListAction.loadMoreAiringTodayTVListFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);

export const onTVListReducers = createReducer(
  initialListState,
  on(TVListAction.loadOnTVList, (state) => ({ ...state, loading: true })),
  on(TVListAction.loadOnTVListSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data,
  })),
  on(TVListAction.loadOnTVListFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(TVListAction.loadMoreOnTVList, (state) => ({
    ...state,
    loading: true,
  })),
  on(TVListAction.loadMoreOnTVListSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data: {
      ...state.data,
      results: [...state.data.results, ...data.results],
    },
  })),
  on(TVListAction.loadMoreOnTVListFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);

export const topRattedTVListReducers = createReducer(
  initialListState,
  on(TVListAction.loadTopRattedTVList, (state) => ({
    ...state,
    loading: true,
  })),
  on(TVListAction.loadTopRattedTVListSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(TVListAction.loadTopRattedTVListFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  })),
  on(TVListAction.loadMoreTopRatedTVList, (state) => ({
    ...state,
    loading: true,
  })),
  on(TVListAction.loadMoreTopRatedTVListSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data: {
      ...state.data,
      results: [...state.data.results, ...data.results],
    },
  })),
  on(TVListAction.loadMoreTopRatedTVListFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);
