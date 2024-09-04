import { BehaviorSubject, Observable, of, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PageCardData } from '../../home/model/cardModel';
import { environment } from '../../../../environments/environment';
import { listModuleState, listPropsType } from '../models/list-state.model';
import { select, Store } from '@ngrx/store';

import * as MovieListActions from '../state/actions/movie-list.actions';
import * as TVListActions from '../state/actions/tv-list.actions';
import * as PeopleListActions from '../state/actions/people-list.actions';

import * as MovieListSelector from '../state/selectors/movie-list.selectors';
import * as TVListSelector from '../state/selectors/tv-list.selectors';
import * as PeopleListSelector from '../state/selectors/people-list.selectors';

import * as SingleSelector from '../state/reducers/movie-list.feature'

import { genre } from '../../details/models/details.model';
import { SharedFacadeService } from '../../../shared/services/shared.facade.service';
@Injectable({
  providedIn: 'root',
})
export class ListService {
  actionMap = {
    movie: {
      popular: MovieListActions.loadPopularMovieList,
      now_playing: MovieListActions.loadNowPlayingMovieList,
      upcoming: MovieListActions.loadUpcomingMovieList,
      top_rated: MovieListActions.loadTopRattedMovieList,
    },
    tv: {
      popular: TVListActions.loadPopularTVList,
      airing_today: TVListActions.loadAiringTodayTVList,
      on_the_air: TVListActions.loadOnTVList,
      top_rated: TVListActions.loadTopRattedTVList,
    },
    people: {
      popular: PeopleListActions.loadPopularPeopleList,
    },
  };
  loadMoreActionMap = {
    movie: {
      popular: MovieListActions.loadMorePopularMovieList,
      now_playing: MovieListActions.loadMoreNowPlayingMovieList,
      upcoming: MovieListActions.loadMoreUpcomingMovieList,
      top_rated: MovieListActions.loadMoreTopRatedMovieList,
    },
    tv: {
      popular: TVListActions.loadMorePopularTVList,
      airing_today: TVListActions.loadMoreAiringTodayTVList,
      on_the_air: TVListActions.loadMoreOnTVList,
      top_rated: TVListActions.loadMoreTopRatedTVList,
    },
    people: {
      popular: PeopleListActions.loadMorePopularPeopleList,
    },
  };
  selectorMap = {
    movie: {
      popular: {
        data: MovieListSelector.selectPopularMovieListData,
        loading: MovieListSelector.selectPopularMovieListLoading,
        error: MovieListSelector.selectPopularMovieListError,
      },
      now_playing: {
        data: MovieListSelector.selectNowPlayingMovieListData,
        loading: MovieListSelector.selectNowPlayingMovieListLoading,
        error: MovieListSelector.selectNowPlayingMovieListError,
      },
      upcoming: {
        data: MovieListSelector.selectUpcomingMovieListData,
        loading: MovieListSelector.selectUpcomingMovieListLoading,
        error: MovieListSelector.selectUpcomingMovieListError,
      },
      top_rated: {
        data: MovieListSelector.selectTopRattedMovieListData,
        loading: MovieListSelector.selectTopRattedMovieListLoading,
        error: MovieListSelector.selectTopRattedMovieListError,
      },
    },
    tv: {
      popular: {
        data: TVListSelector.selectPopularTVListData,
        loading: TVListSelector.selectPopularTVListLoading,
        error: TVListSelector.selectPopularTVListError,
      },
      airing_today: {
        data: TVListSelector.selectAiringTodayTVListData,
        loading: TVListSelector.selectAiringTodayTVListLoading,
        error: TVListSelector.selectAiringTodayTVListError,
      },
      on_the_air: {
        data: TVListSelector.selectOnTVListData,
        loading: TVListSelector.selectOnTVListLoading,
        error: TVListSelector.selectOnTVListError,
      },
      top_rated: {
        data: TVListSelector.selectTopRattedTVListData,
        loading: TVListSelector.selectTopRattedTVListLoading,
        error: TVListSelector.selectTopRattedTVListError,
      },
    },
    people: {
      popular: {
        data: PeopleListSelector.selectPopularPeopleListData,
        loading: PeopleListSelector.selectPopularPeopleListLoading,
        error: PeopleListSelector.selectPopularPeopleListError,
      },
    },
  };

  
  private genres = new BehaviorSubject<any>(null);
  constructor(
    private http: HttpClient,
    private store: Store<listModuleState>,
  ) {}

  getListData(type: string, subType: string, params:string='') {
    if (type === 'people') type = 'person';
    params=params.replace(/,/g,' ');
    return this.http.get<PageCardData>(
      `${environment.BASE_URL}/discover/${type}?${params}`
    );
  }

  loadGenres(type: string) {
    this.genres.next(
      this.http.get(`${environment.BASE_URL}/genre/${type}/list?language=en`)
    );
  }
  getGenres() {
    return this.genres;
  }

loadStoreData(type: string, subtype: string, queryParams: string, loadMore = false) {
  const props: listPropsType = {
    type: type,
    subType: subtype,
    queryParams: queryParams,
  };
  

  const action = loadMore 
    ? this.loadMoreActionMap[type]?.[subtype] 
    : this.actionMap[type]?.[subtype];

  if (action) {
    this.store.dispatch(action({ data: props }));
  } else {
    console.log(type, subtype);
    console.error('Invalid type or subtype provided');
  }
}

  selectListData(loadingSelector, dataSelector, errorSelector) {
    let loading$ = this.store.pipe(select(loadingSelector));
    let data$ = this.store.pipe(select(dataSelector));
    let error$ = this.store.pipe(select(errorSelector));
    return {
      loading$: loading$,
      data: data$,
      error: error$,
    };
  }

  selectStoreData(type: string, subtype: string) {
    const selectors = this.selectorMap[type]?.[subtype];

    if (selectors) {
      this.store.pipe(select(selectors.data)).subscribe((res) => {});
      return {
        loading$: this.store.pipe(select(selectors.loading)),
        data$: this.store.pipe(select(selectors.data)),
        error$: this.store.pipe(select(selectors.error)),
      };
    } else {
      console.error('Invalid type or subtype provided for selectors');
      return null;
    }
  }
  selectSingleListData(type:string){
      return {
        loading$:this.store.pipe(select(SingleSelector.selectLoading)),
        data$:this.store.pipe(select(SingleSelector.selectData)),
        error$:this.store.pipe(select(SingleSelector.selectError))
      }
  }
  createQueryParamObject(queryParams){
    let selectedInitialReleaseDate = queryParams['release_date.gte']?new Date(queryParams['release_date.gte']) : null;
      let selectedFinalReleaseDate =queryParams['release_date.lte']?new Date( queryParams['release_date.lte']) : null;
      let selectedGenreId = queryParams['with_genres']
        ? queryParams['with_genres'].split(',').map(Number)
        : [];
      let selectedSortType = queryParams['sort_by']||'popularity.desc';
      let selectedFirstUserScore = queryParams['vote_average.gte'] || 0;
      let selectedLastUserScore = queryParams['vote_average.lte'] || 10;
      let selectedUserVote = queryParams['vote_count.gte'] || 0;
      // this.vote
      let SelectedFirstRuntime = queryParams['with_runtime.gte'] || 0;
      let SelectedLastRuntime = queryParams['with_runtime.lte'] || 400;

    return {
      adult: false,
      video: false,
      language: 'en-US',
      page:queryParams['page']||1,
      releaseDate_gte: selectedInitialReleaseDate
      ? selectedInitialReleaseDate.toString().slice(0, 10)
      : '',
    releaseDate_lte: selectedFinalReleaseDate
      ? selectedFinalReleaseDate.toString().slice(0, 10)
      : '',
    sortBy: selectedSortType,
    vote_average_gte: selectedFirstUserScore,
    vote_average_lte: selectedLastUserScore,
    vote_count_gte: selectedUserVote,
    vote_count_lte: 0,
    with_genres:
      selectedGenreId.length > 0 ? selectedGenreId.toString() : '',
    with_keyword: '',
    with_runtime_gte:SelectedFirstRuntime,
    with_runtime_lte:SelectedLastRuntime
    }

  }
}
