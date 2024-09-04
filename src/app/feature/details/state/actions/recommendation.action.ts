import { createAction, props } from "@ngrx/store"
import { detailsPropsType } from "../../models/movie-tv-details.model"
import { MovieDetails, TVDetails } from "../../models/details.model";

export const loadRecommendation = createAction('[Details] Recommendation', props<{ data: detailsPropsType }>());

export const loadRecommendationSuccess = createAction('[Details] Recommendation Success', props<{ data: MovieDetails[] | TVDetails[] }>());

export const loadRecommendationFailure = createAction('[Details] Recommendation Failure', props<{ error: any }>());