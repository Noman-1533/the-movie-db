import { createFeatureSelector, createSelector } from "@ngrx/store";
import { detailsModuleState } from "../../models/details-state.mode";

export const selectDetailsState=createFeatureSelector<detailsModuleState>('details');
export const selectCastDetailsState=createSelector(
    selectDetailsState,
    (state:detailsModuleState)=>state.castDetails
);

export const selectCastDetailsData=createSelector(
    selectCastDetailsState,
    (state)=>state.data
);

export const selectCastDetailsLoading=createSelector(
    selectCastDetailsState,
    (state)=>state.loading
);

export const selectCastDetailsError=createSelector(
    selectCastDetailsState,
    (state)=>state.error
);