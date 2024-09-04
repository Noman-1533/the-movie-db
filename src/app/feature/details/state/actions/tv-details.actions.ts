import { createAction, props } from "@ngrx/store";
import { TVDetails } from "../../models/details.model";

export const loadTVDetails = createAction('[Details] Load TV Details', props<{ data: { id: number, type: string } }>());
export const loadTVDetailsSuccess = createAction('[Details] Load TV Details Success', props<{ data: TVDetails }>());
export const loadTVDetailsFailure = createAction('[Details] Load TV Details Failure', props<{ error: any }>());
