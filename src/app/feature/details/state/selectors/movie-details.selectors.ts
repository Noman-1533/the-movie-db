import { createFeatureSelector, createSelector } from "@ngrx/store";
import { detailsModuleState, pageDetailsState } from "../../models/details-state.mode";

export const selectDetailsState=createFeatureSelector<detailsModuleState>('details');
export const selectMovieDetailsState=createSelector(
    selectDetailsState,
    (state:detailsModuleState)=>state.movieDetails
);

export const selectMovieDetailsData=createSelector(
    selectMovieDetailsState,
    (state:pageDetailsState)=>state.data
);

export const selectMovieDetailsLoading=createSelector(
    selectMovieDetailsState,
    (state)=>state.loading
);

export const selectMovieDetailsError=createSelector(
    selectMovieDetailsState,
    (state)=>state.error
);