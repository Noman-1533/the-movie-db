import { createFeature, createReducer, on } from "@ngrx/store";
import { initialListState } from "../../models/list-state.model";
import * as MovieListAction from '../actions/movie-list.actions';

const reducers = createReducer(
  initialListState,

  // Handle loadMovieList action
  on(MovieListAction.loadMovieList, (state) =>({...state,loading:true})),

  // Handle loadMovieListSuccess action
  on(MovieListAction.loadMovieListSuccess, (state, { data }) => ({...state,data,loading:false})
  ),

  // Handle loadMovieListFailure action
  on(MovieListAction.loadMovieListFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  })),
  on(MovieListAction.loadMoreMovieList,state=>({...state,loading:true})),
  on(MovieListAction.loadMoreMovieListSuccess,(state,{data})=>({
    ...state,
    loading:false,
    data:{
      ...state.data,
      results:[...state.data.results,...data.results]
    }
  })),
  on(MovieListAction.loadMoreMovieListFailure,(state,{error})=>({...state,error:error,loading:false}))
);


export const MovieFeature=createFeature({
    name:'Movie-List',
    reducer:reducers,
    
})

export const{
    name,
    reducer,
    selectData,
    selectError,
    selectLoading,

}=MovieFeature