import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DetailsService } from './details.service';
import { CastDetails, MovieDetails, TVDetails } from '../models/details.model';
import { detailsModuleState } from '../models/details-state.mode';

import * as MovieSelector from '../state/selectors/movie-details.selectors';
import * as CastSelector from '../state/selectors/cast-details.selectors';
import * as TVSelector from '../state/selectors/tv-details.selectors';
import * as RecommendationSelector from '../state/selectors/recommendation.selector';

import * as MovieAction from '../state/actions/movie-details.actions';
import * as CastAction from '../state/actions/cast-details.actions';
import * as TVAction from '../state/actions/tv-details.actions';
import * as RecommendationAction from '../state/actions/recommendation.action'
import { detailsPropsType, MovieDescriptionModel } from '../models/movie-tv-details.model';
import { PageSingleCardModel, PageSingleCardViewModel } from '../../home/model/cardModel';
import { SharedFacadeService } from '../../../shared/services/shared.facade.service';

@Injectable({
  providedIn: 'root',
})
export class DetailsFacadeService {
  movieDetailsData$: Observable<MovieDetails>;
  castDetailsData$: Observable<CastDetails>;
  tvDetailsData$: Observable<TVDetails>;
  recommendationData$: Observable<any>;

  movieDetailsLoading$: Observable<boolean>;
  castDetailsLoading$: Observable<boolean>;
  tvDetailsLoading$: Observable<boolean>;
  recommendationLoading$: Observable<boolean>;

  movieDetailsError$: Observable<any>;
  castDetailsError$: Observable<any>;
  tvDetailsError$: Observable<any>;
  recommendationError$: Observable<any>;


  constructor(
    private detailsService: DetailsService,
    private store: Store<detailsModuleState>,
    private sharedFacadeService:SharedFacadeService,
  ) { }
  selectMovieDetails() {
    this.movieDetailsLoading$ = this.store.pipe(
      select(MovieSelector.selectMovieDetailsLoading)
    );
    this.movieDetailsData$ = this.store.pipe(
      select(MovieSelector.selectMovieDetailsData)
    );
    this.movieDetailsError$ = this.store.pipe(
      select(MovieSelector.selectMovieDetailsError)
    );
  }
  selectCastDetails() {
    this.castDetailsLoading$ = this.store.pipe(
      select(CastSelector.selectCastDetailsLoading)
    );
    this.castDetailsData$ = this.store.pipe(
      select(CastSelector.selectCastDetailsData)
    );
    this.castDetailsError$ = this.store.pipe(
      select(CastSelector.selectCastDetailsError)
    );
  }
  selectTVDetails() {
    this.tvDetailsLoading$ = this.store.pipe(
      select(TVSelector.selectTVDetailsLoading)
    );
    this.tvDetailsData$ = this.store.pipe(
      select(TVSelector.selectTVDetailsData)
    );
    this.tvDetailsError$ = this.store.pipe(
      select(TVSelector.selectTVDetailsError)
    );
  }
  selectRecommendation() {
    this.recommendationLoading$ = this.store.pipe(
      select(RecommendationSelector.selectRecommendationStateLoading)
    );
    this.recommendationData$ = this.store.pipe(
      select(RecommendationSelector.selectRecommendationStateData)
    );
    this.recommendationError$ = this.store.pipe(
      select(RecommendationSelector.selectRecommendationStateError)
    );
  }
  

  loadData(type: string, id: number, recommendation: boolean = false) {
    let ActionData: detailsPropsType = { type: type, id: id };
    if (recommendation) {
      this.store.dispatch(RecommendationAction.loadRecommendation({ data: ActionData }));
    }
    {
      switch (type) {
        case 'movie': {
          this.store.dispatch(MovieAction.loadMovieDetails({ data: ActionData }));
          break;
        }
        case 'tv': {
          this.store.dispatch(TVAction.loadTVDetails({ data: ActionData }));
          break;
        }
        case 'cast': {
          this.store.dispatch(CastAction.loadCastDetails({ data: ActionData }));
          break;
        }
      }
    }
  }
  
  getDetails(
    type: string,
    id: number
  ): Observable<MovieDetails | CastDetails | TVDetails> {
    return this.detailsService.getDetails(type, id);
  }

  getRecommendation(type: string, id: number): Observable<MovieDetails[]|TVDetails[]> {
    return this.detailsService.getRecommendation(type, id);
  }
  getDescription(type: string) {
    let description: MovieDescriptionModel;
    switch (type) {
      case 'movie': {
        description = (this.detailsService.getShortDescription(this.movieDetailsData$));
        break;
      }
      case 'tv':{
        
        description = (this.detailsService.getShortDescription(this.tvDetailsData$));
        break;
      }
    }
    // console.log('from facade',description)
    return description;
  }
  getRecommendationViewData(data:PageSingleCardModel[]) {
    let recommendationViewData:PageSingleCardViewModel[];
    recommendationViewData=this.sharedFacadeService.getSinglePageCardViewData(data);
    return recommendationViewData;
  }
  
}
