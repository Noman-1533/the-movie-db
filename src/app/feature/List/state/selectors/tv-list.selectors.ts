import { createSelector } from "@ngrx/store";
import { selectAiringTodayTVListState, selectOnTVListState, selectPopularMovieListState, selectPopularTVListState, selectTopRattedTVListState } from "./index.selectors";
import { listState } from "../../models/list-state.model";

// Popular

export const selectPopularTVListData=createSelector(
    selectPopularTVListState,
    (state:listState)=>state.data
);

export const selectPopularTVListLoading=createSelector(
    selectPopularTVListState,
    (state:listState)=>state.loading
);

export const selectPopularTVListError=createSelector(
    selectPopularTVListState,
    (state:listState)=>state.error
);

// Airing Today

export const selectAiringTodayTVListData=createSelector(
    selectAiringTodayTVListState,
    (state:listState)=>state.data
);

export const selectAiringTodayTVListLoading=createSelector(
    selectAiringTodayTVListState,
    (state:listState)=>state.loading
);

export const selectAiringTodayTVListError=createSelector(
    selectAiringTodayTVListState,
    (state:listState)=>state.error
);

// On TV

export const selectOnTVListData=createSelector(
    selectOnTVListState,
    (state:listState)=>state.data
);

export const selectOnTVListLoading=createSelector(
    selectOnTVListState,
    (state:listState)=>state.loading
);

export const selectOnTVListError=createSelector(
    selectOnTVListState,
    (state:listState)=>state.error
);

// Top Ratted

export const selectTopRattedTVListData=createSelector(
    selectTopRattedTVListState,
    (state:listState)=>state.data
);

export const selectTopRattedTVListLoading=createSelector(
    selectTopRattedTVListState,
    (state:listState)=>state.loading
);

export const selectTopRattedTVListError=createSelector(
    selectTopRattedTVListState,
    (state:listState)=>state.error
);

