import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
// import * as TrendingSelectors from './state/selectors/trending.selectors';
// import * as PopularSelectors from './state/selectors/popular.selector';
import * as TrendingSelectors from './state/reducers/trending.reducer';
import * as PopularSelectors from './state/reducers/popular.reducer'
import * as TrendingActions from './state/actions/trending.action';
import * as PopularActions from './state/actions/popular.action';
import { PageCardData, PageSingleCardViewModel } from './model/cardModel';
import { environment } from '../../../environments/environment';
import { CardDataService } from './services/card-data.service';
// import { HomeModuleState } from './state/reducers/home.reducer';
import { SharedFacadeService } from '../../shared/services/shared.facade.service';
@Injectable({
  providedIn: 'root',
})
export class HomeFacadeService {
  trendingData$: Observable<PageCardData>;
  trailerData$: Observable<PageCardData>;
  popularData$: Observable<PageCardData>;

  trendingLoading$: Observable<boolean>;
  trailerLoading$: Observable<boolean>;
  popularLoading$: Observable<boolean>;

  trendingError$: Observable<any>;
  trailerError$: Observable<any>;
  popularError$: Observable<any>;

  constructor(
    private store: Store,
    private cardDataService: CardDataService,
    private sharedFacadeService:SharedFacadeService,
  ) { }
  selectTrending() {
    this.trendingData$ = this.store.pipe(
      select(TrendingSelectors.selectData)
    );
    this.trendingLoading$ = this.store.pipe(
      select(TrendingSelectors.selectLoading)
    );
    this.trendingError$ = this.store.pipe(
      select(TrendingSelectors.selectError)
    );
  }

  selectPopular() {
    this.popularData$ = this.store.pipe(
      select(PopularSelectors.selectData)
    );
    this.popularLoading$ = this.store.pipe(
      select(PopularSelectors.selectLoading)
    );
    this.popularError$ = this.store.pipe(
      select(PopularSelectors.selectError)
    );
  }
  loadData() {
    this.cardDataService.trendingButtonSwitch.subscribe((res) => {
      this.store.dispatch(TrendingActions.loadTrending({ data: res }));
    });
    this.cardDataService.popularButtonSwitch.subscribe((res) => {
      this.store.dispatch(PopularActions.loadPopular({ data: res }));
    });
  }

  getSingleCardViewData(data$: Observable<PageCardData>) {
    let singleCardViewData: PageSingleCardViewModel[];
    data$.subscribe((res) => {
      let results = res.results;
      // let tv=results.map((data)=>data.first_air_date);
      // if(tv)console.log(tv)
      // console.log(res);
      singleCardViewData = this.sharedFacadeService.getSinglePageCardViewData(results);
    });

    return of(singleCardViewData);
  }
}
