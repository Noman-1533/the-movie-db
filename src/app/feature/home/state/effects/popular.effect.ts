// // src/app/home/state/effects/popular.effects.ts
// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import { of } from 'rxjs';
// import * as PopularActions from '../actions/popular.action';
// import { CardDataService } from '../../services/card-data.service';

// @Injectable()
// export class PopularEffects {
//   constructor(
//     private actions$: Actions,
//     private cardDataService: CardDataService
//   ) {}

//   loadPopular$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(PopularActions.loadPopular),
//       mergeMap(action =>
//         this.cardDataService.getTrending(action.data).pipe(
//           map(data => PopularActions.loadPopularSuccess({ data })),
//           catchError(error => of(PopularActions.loadPopularFailure({ error })))
//         )
//       )
//     )
//   );
// }

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as PopularActions from '../actions/popular.action';
import { CardDataService } from '../../services/card-data.service';

@Injectable()
export class PopularEffects {
  constructor(
    private actions$: Actions,
    private cardDataService: CardDataService
  ) {}

  loadPopular$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PopularActions.loadPopular),
      mergeMap((action) =>
        this.cardDataService.getPopular(action.data).pipe(
          map((data) => {
            data.results.forEach((res, index) => {
              data.results[index] = { ...res, media_type: action.data };
            });
            return PopularActions.loadPopularSuccess({ data });
          }),
          catchError((error) =>
            of(PopularActions.loadPopularFailure({ error }))
          )
        )
      )
    )
  );
}
