import { createFeatureSelector, createSelector } from "@ngrx/store";
import { detailsModuleState, recommendationState } from "../../models/details-state.mode";

export const selectDetailsState = createFeatureSelector<detailsModuleState>('details');

export const selectRecommendationState = createSelector(
    selectDetailsState,
    (state: detailsModuleState) => state.recommendation
);
export const selectRecommendationStateData = createSelector(
    selectRecommendationState,
    (state: recommendationState) => state.data
);

export const selectRecommendationStateLoading = createSelector(
    selectRecommendationState,
    (state: recommendationState) => state.loading
);

export const selectRecommendationStateError = createSelector(
    selectRecommendationState,
    (state:recommendationState)=>state.error
)