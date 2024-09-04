import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { DetailsFacadeService } from '../../services/details.facade.service';
import * as RecommendationAction from '../actions/recommendation.action';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
@Injectable()
export class recommendationEffect {
  constructor(
    private Action$: Actions,
    private detailsFacade: DetailsFacadeService
  ) {}
  loadRecommendation$ = createEffect(() =>
    this.Action$.pipe(
      ofType(RecommendationAction.loadRecommendation),
      mergeMap((action) =>
        this.detailsFacade
          .getRecommendation(action.data.type, action.data.id)
              .pipe(
              tap(()=>console.log('Recommendation Effect called')),
            map((data) =>
              RecommendationAction.loadRecommendationSuccess({ data })
            ),
            catchError((error) =>
              of(RecommendationAction.loadRecommendationFailure({ error }))
            )
          )
      )
    )
  );
}
