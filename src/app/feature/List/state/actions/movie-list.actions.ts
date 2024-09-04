import { createAction, props } from "@ngrx/store";
import { PageCardData } from "../../../home/model/cardModel";
import { listPropsType } from "../../models/list-state.model";

// Popular

export const loadPopularMovieList=createAction('[List-Movie] Popular Movie List',props<{data:listPropsType}>());

export const loadPopularMovieListSuccess=createAction('[List-Movie] Popular Movie List Success',props<{data:PageCardData}>())

export const loadPopularMovieListFailure=createAction('[List-Movie] Popular Movie List Failure',props<{error:any}>())

export const loadMorePopularMovieList=createAction('[List-Movie] Load More Movie List',props<{data:listPropsType}>());
export const loadMorePopularMovieListSuccess=createAction('[List-Movie] Load More Movie List Success',props<{data:PageCardData}>());
export const loadMorePopularMovieListFailure=createAction('[List-Movie] Load More Movie List Failure',props<{error:any}>());

// NowPlaying

export const loadNowPlayingMovieList=createAction('[List-Movie] NowPlaying Movie List',props<{data:listPropsType}>());

export const loadNowPlayingMovieListSuccess=createAction('[List-Movie] NowPlaying Movie List Success',props<{data:PageCardData}>());

export const loadNowPlayingMovieListFailure=createAction('[List-Movie] NowPlaying Movie List Failure',props<{error:any}>());

export const loadMoreNowPlayingMovieList = createAction(
    '[List-Movie] Load More NowPlaying Movie List',
    props<{ data: listPropsType }>()
  );
  
  export const loadMoreNowPlayingMovieListSuccess = createAction(
    '[List-Movie] Load More NowPlaying Movie List Success',
    props<{ data: PageCardData }>()
  );
  
  export const loadMoreNowPlayingMovieListFailure = createAction(
    '[List-Movie] Load More NowPlaying Movie List Failure',
    props<{ error: any }>()
  );
  
// Upcoming

export const loadUpcomingMovieList=createAction('[List-Movie] Upcoming Movie List',props<{data:listPropsType}>());

export const loadUpcomingMovieListSuccess=createAction('[List-Movie] Upcoming Movie List Success',props<{data:PageCardData}>());

export const loadUpcomingMovieListFailure=createAction('[List-Movie] Upcoming Movie List Failure',props<{error:any}>());
export const loadMoreUpcomingMovieList = createAction(
    '[List-Movie] Load More Upcoming Movie List',
    props<{ data: listPropsType }>()
  );
  
  export const loadMoreUpcomingMovieListSuccess = createAction(
    '[List-Movie] Load More Upcoming Movie List Success',
    props<{ data: PageCardData }>()
  );
  
  export const loadMoreUpcomingMovieListFailure = createAction(
    '[List-Movie] Load More Upcoming Movie List Failure',
    props<{ error: any }>()
  );
  

// TopRatted

export const loadTopRattedMovieList=createAction('[List-Movie] TopRatted Movie List',props<{data:listPropsType}>());

export const loadTopRattedMovieListSuccess=createAction('[List-Movie] TopRatted Movie List Success',props<{data:PageCardData}>());

export const loadTopRattedMovieListFailure=createAction('[List-Movie] TopRatted Movie List Failure',props<{error:any}>());

export const loadMoreTopRatedMovieList = createAction(
    '[List-Movie] Load More TopRated Movie List',
    props<{ data: listPropsType }>()
  );
  
  export const loadMoreTopRatedMovieListSuccess = createAction(
    '[List-Movie] Load More TopRated Movie List Success',
    props<{ data: PageCardData }>()
  );
  
  export const loadMoreTopRatedMovieListFailure = createAction(
    '[List-Movie] Load More TopRated Movie List Failure',
    props<{ error: any }>()
  );
  

// just movie list

export const loadMovieList=createAction('[List-Movie] Movie List',props<{data:{type:string,subType:string,queryParams:string}}>())

export const loadMovieListSuccess=createAction('[List-Movie] Movie List Success',props<{data:PageCardData}>());
export const loadMovieListFailure=createAction('[List-Movie] Movie List Failure',props<{error:any}>());


export const loadMoreMovieList=createAction('[List-Movie] Load More Movie List',props<{data:{type:string,subType:string,queryParams:string}}>());
export const loadMoreMovieListSuccess=createAction('[List-Movie] Load More Movie List Success',props<{data:PageCardData}>());
export const loadMoreMovieListFailure=createAction('[List-Movie] Load More Movie List Failure',props<{error:any}>())
