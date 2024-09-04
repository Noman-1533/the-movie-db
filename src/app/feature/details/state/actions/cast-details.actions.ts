import { createAction, props } from '@ngrx/store';
import { CastDetails } from '../../models/details.model';

export const loadCastDetails = createAction(
  '[Details] Load Cast Details',
  props<{ data: { id: number; type: string } }>()
);
export const loadCastDetailsSuccess = createAction(
  '[Details] Load Cast Details Success',
  props<{ data: CastDetails }>()
);
export const loadCastDetailsFailure = createAction(
  '[Details] Load Cast Details Failure',
  props<{ error: any }>()
);
