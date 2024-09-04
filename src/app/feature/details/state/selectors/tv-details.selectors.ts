import { createFeatureSelector, createSelector } from "@ngrx/store";
import { detailsModuleState } from "../../models/details-state.mode";

export const selectDetailsState=createFeatureSelector<detailsModuleState>('details');
export const selectTVDetailsState=createSelector(
    selectDetailsState,
    (state:detailsModuleState)=>state.tvDetails
);

export const selectTVDetailsData=createSelector(
    selectTVDetailsState,
    (state)=>state.data
);

export const selectTVDetailsLoading=createSelector(
    selectTVDetailsState,
    (state)=>state.loading
);

export const selectTVDetailsError=createSelector(
    selectTVDetailsState,
    (state)=>state.error
);