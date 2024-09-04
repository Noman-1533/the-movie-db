// // src/app/state/effects/trending.effects.ts
// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { HttpClient } from '@angular/common/http';
// import { catchError, map, mergeMap, tap } from 'rxjs/operators';
// import { of } from 'rxjs';
// import * as TrendingActions from '../actions/trending.action';
// import { CardDataService } from '../../services/card-data.service';
// import {  PageCardData } from '../../model/cardModel';

// @Injectable()
// export class TrendingEffects {
//   constructor(
//     private actions$: Actions,
//     private trendingData: CardDataService,
//     private http: HttpClient
//   ) {}
//   loadTrending$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(TrendingActions.loadTrending),
//       mergeMap((action) =>
//         this.trendingData.getTrending(action.data).pipe(
//           tap((res) => {
//             // console.log(res);
//           }),
//           map((data) => {
//           //  this.getCardData(data);

//             return TrendingActions.loadTrendingSuccess({ data });
//           }),
//           catchError((error) =>
//             of(TrendingActions.loadTrendingFailure({ error }))
//           )
//         )
//       )
//     )
//   );
// }

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TrendingActions from '../actions/trending.action';
import { CardDataService } from '../../services/card-data.service';

@Injectable()
export class TrendingEffects {
  constructor(
    private actions$: Actions,
    private cardDataService: CardDataService
  ) {}

  loadTrending$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrendingActions.loadTrending),
      mergeMap((action) =>
        this.cardDataService.getTrending(action.data).pipe(
          tap(() => console.log('call from trending effect')),
          map((data) => TrendingActions.loadTrendingSuccess({ data })),
          catchError((error) =>
            of(TrendingActions.loadTrendingFailure({ error }))
          )
        )
      )
    )
  );
}
