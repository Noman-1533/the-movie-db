import { createFeatureSelector, createSelector } from "@ngrx/store";
import { listModuleState } from "../../models/list-state.model";

export const selectListState=createFeatureSelector<listModuleState>('List');

export const selectPopularMovieListState=createSelector(
    selectListState,
    (state:listModuleState)=>state.popularMovieList
);

export const selectNowPlayingMovieListState=createSelector(
    selectListState,
    (state:listModuleState)=> state.nowPlayingMovieList
);

export const selectUpcomingMovieListState=createSelector(
    selectListState,
    (state:listModuleState)=> state.upcomingMovieList
);

export const selectTopRattedMovieListState=createSelector(
    selectListState,
    (state:listModuleState)=> state.topRattedMovieList
);


export const selectPopularTVListState=createSelector(
    selectListState,
    (state:listModuleState)=> state.popularTVList
);

export const selectAiringTodayTVListState=createSelector(
    selectListState,
    (state:listModuleState)=> state.airingTodayTVList
);

export const selectOnTVListState=createSelector(
    selectListState,
    (state:listModuleState)=> state.onTVList
);

export const selectTopRattedTVListState=createSelector(
    selectListState,
    (state:listModuleState)=> state.topRattedTVList
);

export const selectPopularPeopleListState=createSelector(
    selectListState,
    (state:listModuleState)=> state.popularPeopleList
);

