import { ActionReducerMap } from "@ngrx/store";
import { detailsModuleState } from "../../models/details-state.mode";
import { castDetailsReducers } from "./cast-details.reducers";
import { movieDetailsReducers } from "./movie-details.reducers";
import { tvDetailsReducers } from "./tv-details.reducers";
import { recommendationReducers } from "./recommendation.reducers";

export const detailsReducer:ActionReducerMap<detailsModuleState>={
    castDetails:castDetailsReducers,
    movieDetails:movieDetailsReducers,
    tvDetails: tvDetailsReducers,
    recommendation:recommendationReducers

}