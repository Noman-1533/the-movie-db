import { ActionReducerMap } from "@ngrx/store";
import { listModuleState } from "../../models/list-state.model";
import { nowPlayingMovieListReducers, popularMovieListReducers, topRattedMovieListReducers, upcomingMovieListReducers } from "./movie-list.reducers";
import { airingTodayTVListReducers, onTVListReducers, popularTVListReducers, topRattedTVListReducers } from "./tv-list.reducers";
import { popularPeopleListReducers } from "./people-list.reducers";

export const listReducers:ActionReducerMap<listModuleState>={
    popularMovieList:popularMovieListReducers,
    nowPlayingMovieList:nowPlayingMovieListReducers,
    upcomingMovieList:upcomingMovieListReducers,
    topRattedMovieList:topRattedMovieListReducers,

    popularTVList:popularTVListReducers,
    airingTodayTVList:airingTodayTVListReducers,
    onTVList:onTVListReducers,
    topRattedTVList:topRattedTVListReducers,

    popularPeopleList:popularPeopleListReducers
}