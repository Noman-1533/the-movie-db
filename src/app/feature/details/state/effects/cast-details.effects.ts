import { Injectable } from '@angular/core';
import * as CastAction from '../actions/cast-details.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DetailsFacadeService } from '../../services/details.facade.service';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
@Injectable()
export class castDetailsEffects {
  constructor(
    private Action$: Actions,
    private detailsFacade: DetailsFacadeService
  ) {}
  loadCastDetails$ = createEffect(() =>
    this.Action$.pipe(
      ofType(CastAction.loadCastDetails),
      mergeMap((action) =>
        this.detailsFacade.getDetails(action.data.type, action.data.id).pipe(
          map((data) => CastAction.loadCastDetailsSuccess({ data })),
          catchError((error) =>
            of(CastAction.loadCastDetailsFailure({ error }))
          )
        )
      )
    )
  );
}
