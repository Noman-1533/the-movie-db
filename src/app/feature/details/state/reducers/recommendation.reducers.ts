import { createReducer, on } from "@ngrx/store";
import { recommendationState } from "../../models/details-state.mode";
import * as RecommendationAction from "../actions/recommendation.action";
export const initialRecommendationState: recommendationState = {
    loading: false,
    data: [],
    error:null
}
 
export const recommendationReducers = createReducer(
    initialRecommendationState,
    on(RecommendationAction.loadRecommendation, state => ({ ...state, loading: true })),
    on(RecommendationAction.loadRecommendationSuccess, (state, { data }) => ({ ...state, data: data, loading: false })),
    on(RecommendationAction.loadRecommendationFailure, (state, { error }) => ({ ...state, error: error, loading: false }))
);