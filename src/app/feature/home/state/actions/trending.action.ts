// import { createAction, props } from '@ngrx/store';
// import { PageCardData } from '../../model/cardModel';

// export const loadTrending = createAction('[Trending] Load Trending',props<{data:string}>());
// export const loadTrendingSuccess = createAction('[Trending] Load Trending Success', props<{ data: PageCardData }>());
// export const loadTrendingFailure = createAction('[Trending] Load Trending Failure', props<{ error: PageCardData }>());

import { createAction, props } from '@ngrx/store';
import { PageCardData } from '../../model/cardModel';

export const loadTrending = createAction('[Trending] Load Trending', props<{ data: string }>());
export const loadTrendingSuccess = createAction('[Trending] Load Trending Success', props<{ data: PageCardData }>());
export const loadTrendingFailure = createAction('[Trending] Load Trending Failure', props<{ error: any }>());