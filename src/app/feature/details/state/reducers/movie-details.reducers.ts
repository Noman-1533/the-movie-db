import { createReducer, on } from "@ngrx/store";
import * as MovieDetailsAction from '../actions/movie-details.actions'
import { pageDetailsState } from "../../models/details-state.mode";

export const initialMovieDetailsState:pageDetailsState={
    loading:false,
    data:null,
    error:null,
}
export const movieDetailsReducers=createReducer(
    initialMovieDetailsState,
    on(MovieDetailsAction.loadMovieDetails,state=>({...state,loading:true})),
    on(MovieDetailsAction.loadMovieDetailsSuccess,(state,{data})=>({...state,data,loading:false})),
    on(MovieDetailsAction.loadMovieDetailsFailure,(state,{error})=>({...state,error,loading:false}))
);