import { Component, OnDestroy, OnInit } from '@angular/core';
import { DetailsFacadeService } from '../../services/details.facade.service';
import { Observable, Subscription, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MovieDescriptionModel } from '../../models/movie-tv-details.model';
import { PageSingleCardViewModel } from '../../../home/model/cardModel';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent implements OnInit,OnDestroy {
  detailsLoading$: Observable<boolean>;
  detailsData: MovieDescriptionModel;
  detailsError$: Observable<any>;
  detailsType: string;

  recommendationLoading$: Observable<boolean>;
  recommendationData$: Observable<PageSingleCardViewModel[]>;
  recommendationError$: Observable<any>;

  detailsLoadingSubscription: Subscription;
  recommendationLoadingSubscription: Subscription;

  constructor(
    private facade: DetailsFacadeService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.detailsType = this.activeRoute.snapshot.params? this.activeRoute.snapshot.params['type']:'';
    if (this.detailsType == 'movie') {
      this.selectMovies();
    } else {
      this.selectTVs();
    }
    this.selectRecommendation();
    this.setRecommendation();
    this.setDetails();
    // this.facade.getRecommendationViewData();

    
  }

  selectMovies() {
    this.facade.selectMovieDetails();
    this.detailsLoading$ = this.facade.movieDetailsLoading$;
    this.detailsError$ = this.facade.movieDetailsError$;
  }
  selectTVs() {
    this.facade.selectTVDetails();
      this.detailsLoading$ = this.facade.tvDetailsLoading$;
      this.detailsError$ = this.facade.tvDetailsError$;
  }
  selectRecommendation() {
    this.facade.selectRecommendation();
    this.recommendationLoading$ = this.facade.recommendationLoading$;
    this.recommendationError$ = this.facade.recommendationError$;
  }
  setDetails() {
    if (this.detailsLoading$ != null) {
      // console.log('from details');
      this.detailsLoadingSubscription= this.detailsLoading$.subscribe((res) => {
        if (res === false) {
          this.detailsData = this.facade.getDescription(this.detailsType);
          // console.log('details data', this.detailsData);
        }
      });
    }
  }
  setRecommendation() {
    if (this.recommendationLoading$ != null) {
      this.recommendationLoadingSubscription = this.recommendationLoading$.subscribe((res) => {
        if (res === false) {
          this.facade.recommendationData$.subscribe((data) => {
            this.recommendationData$=of(this.facade.getRecommendationViewData(data.results));
         })
       }
     })
    }
  }
  
  ngOnDestroy(): void {
    this.detailsLoadingSubscription.unsubscribe();
    this.recommendationLoadingSubscription.unsubscribe();
  }
}
