import { createAction, props } from "@ngrx/store";
import { MovieDetails } from "../../models/details.model";
import { detailsPropsType } from "../../models/movie-tv-details.model";

export const loadMovieDetails=createAction('[Details] Movie Details',props<{data:detailsPropsType}>());
export const loadMovieDetailsSuccess=createAction('[Details] Movie Details Success', props<{data:MovieDetails}>());
export const loadMovieDetailsFailure=createAction('[Details] Movie Details Failure',props<{error:any}>());