import { createSelector } from "@ngrx/store";
import { selectNowPlayingMovieListState, selectPopularMovieListState, selectTopRattedMovieListState, selectUpcomingMovieListState } from "./index.selectors";
import { listState } from "../../models/list-state.model";

// Popular

export const selectPopularMovieListData=createSelector(
    selectPopularMovieListState,
    (state:listState)=>state.data
)

export const selectPopularMovieListLoading=createSelector(
    selectPopularMovieListState,
    (state:listState)=>state.loading
)

export const selectPopularMovieListError=createSelector(
    selectPopularMovieListState,
    (state:listState)=>state.error
)

// Now Playing

export const selectNowPlayingMovieListData=createSelector(
    selectNowPlayingMovieListState,
    (state:listState)=>state.data
)

export const selectNowPlayingMovieListLoading=createSelector(
    selectNowPlayingMovieListState,
    (state:listState)=>state.loading
)

export const selectNowPlayingMovieListError=createSelector(
    selectNowPlayingMovieListState,
    (state:listState)=>state.error
)

// Upcoming

export const selectUpcomingMovieListData=createSelector(
    selectUpcomingMovieListState,
    (state:listState)=>state.data
)
export const selectUpcomingMovieListLoading=createSelector(
    selectUpcomingMovieListState,
    (state:listState)=>state.loading
)
export const selectUpcomingMovieListError=createSelector(
    selectUpcomingMovieListState,
    (state:listState)=>state.error
)

// Top Ratted

export const selectTopRattedMovieListData=createSelector(
    selectTopRattedMovieListState,
    (state:listState)=>state.data
)
export const selectTopRattedMovieListLoading=createSelector(
    selectTopRattedMovieListState,
    (state:listState)=>state.loading
)
export const selectTopRattedMovieListError=createSelector(
    selectTopRattedMovieListState,
    (state:listState)=>state.error
)