import { Injectable } from '@angular/core';
import * as MovieAction from '../actions/movie-details.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DetailsFacadeService } from '../../services/details.facade.service';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
@Injectable()
export class movieDetailsEffects {
  constructor(
    private Action$: Actions,
    private detailsFacade: DetailsFacadeService
  ) {}
  loadMovieDetails$ = createEffect(() =>
    this.Action$.pipe(
      ofType(MovieAction.loadMovieDetails),
      mergeMap((action) =>
        this.detailsFacade.getDetails(action.data.type, action.data.id).pipe(
          tap(()=>console.log('movie effect called')),
          map((data) => MovieAction.loadMovieDetailsSuccess({ data })),
          catchError((error) =>
            of(MovieAction.loadMovieDetailsFailure({ error }))
          )
        )
      )
    )
  );
}
