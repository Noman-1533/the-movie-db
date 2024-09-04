import { createReducer, on } from "@ngrx/store";
import * as CastDetailsAction from '../actions/cast-details.actions'
import { pageDetailsState} from "../../models/details-state.mode";

export const initialCastDetailsState:pageDetailsState={
    loading:false,
    data:null,
    error:null,
}
export const castDetailsReducers=createReducer(
    initialCastDetailsState,
    on(CastDetailsAction.loadCastDetails,state=>({...state,loading:true})),
    on(CastDetailsAction.loadCastDetailsSuccess,(state,{data})=>({...state,data,loading:false})),
    on(CastDetailsAction.loadCastDetailsFailure,(state,{error})=>({...state,error,loading:false}))
);