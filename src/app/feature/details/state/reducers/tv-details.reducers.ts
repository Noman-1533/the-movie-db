import { createReducer, on } from "@ngrx/store";
import * as TVDetailsAction from '../actions/tv-details.actions'
import { pageDetailsState } from "../../models/details-state.mode";

export const initialTVDetailsState:pageDetailsState={
    loading:false,
    data:null,
    error:null,
}
export const tvDetailsReducers=createReducer(
    initialTVDetailsState,
    on(TVDetailsAction.loadTVDetails,state=>({...state,loading:true})),
    on(TVDetailsAction.loadTVDetailsSuccess,(state,{data})=>({...state,data,loading:false})),
    on(TVDetailsAction.loadTVDetailsFailure,(state,{error})=>({...state,error,loading:false}))
);