import { Injectable } from '@angular/core';
import { HomeFacadeService } from '../../feature/home/home-facade.service';
import { environment } from '../../../environments/environment';
import {
  PageSingleCardModel,
  PageSingleCardViewModel,
} from '../../feature/home/model/cardModel';
import { CardDataService } from '../../feature/home/services/card-data.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private cardDataService: CardDataService) {}

  switchButton(
    pageName: string,
    containerType: string,
    primaryButton: string,
    secondaryButton: string,
    defaultButtonSelected: boolean
  ) {
    switch (pageName) {
      case 'home': {
        this.switchChange(
          containerType,
          defaultButtonSelected ? primaryButton : secondaryButton
        );
      }
    }
  }

  getCardViewData(results: PageSingleCardModel[]) {
    let singleCardViewData: PageSingleCardViewModel[];
    singleCardViewData = results.map((data) => ({
      id: data.id,
      cardTitle: data.original_title || data.name,
      cardSubtitle: data.release_date || data.first_air_date,
      cardRatting: parseFloat(data.vote_average?data.vote_average.toFixed(1):'0') * 10,
      cardType: data.media_type,
      cardImage:
        environment.IMAGE_BASE_URL +
        environment.IMAGE_SIZES.w300 +
        (data.poster_path),
    }));
    return singleCardViewData;
  }

  private switchChange(containerType: string, currentMode: string) {
    switch (containerType) {
      case 'trending': {
        if (currentMode === 'Today') {
          this.cardDataService.trendingButtonSwitch.next('day');
        } else {
          this.cardDataService.trendingButtonSwitch.next('week');
        }
        // console.log(containerType);
        break;
      }
      case 'popular': {
        // console.log(containerType)
        if (currentMode === 'Movie') {
          this.cardDataService.popularButtonSwitch.next('movie');
        } else {
          this.cardDataService.popularButtonSwitch.next('tv');
        }
        break;
      }
    }
  }

  // ?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2024-07-04&primary_release_date.lte=2025-07-07&sort_by=popularity.desc&vote_average.gte=2&vote_average.lte=10&vote_count.gte=300&vote_count.lte=500&with_genres=1%2C2&with_keywords=abc'
  createQParams(adult:boolean,video:boolean,language:string,pageNo:number,releaseDate_gte:string,releaseDate_lte:string,sortBy:string,voteAverage_gte:number,voteAverage_lte:number,voteCount_gte:number,voteCount_lte:number,withGenres:string,withKeyword:string,with_runtime_gte:number,with_runtime_lte:number,query:string,isForSearch){
    let qParams:string=``;
    if(isForSearch)
      query.length>0?qParams+=`query=${query}&`:``
    qParams+=`include_adult=${adult}&language=${language}&page=${pageNo}`;
    if(!isForSearch)
      {
        qParams+=`&include_video=${video}&sort_by=${sortBy}`
        releaseDate_gte.length!==0?qParams+=`&release_date.gte=${releaseDate_gte}`:``;
        releaseDate_lte.length!==0?qParams+=`&release_date.lte=${releaseDate_lte}`:``;
        voteAverage_gte>0?qParams+=`&vote_average.gte=${voteAverage_gte}`:``;
        voteAverage_lte<10?qParams+=`&vote_average.lte=${voteAverage_lte}`:``;
        voteCount_gte>0?qParams+=`&vote_count.gte=${voteCount_gte}`:``;
        voteCount_lte>0?qParams+=`&vote_count.lte=${voteCount_lte}`:``;
        withGenres.length>0?qParams+=`&with_genres=${withGenres}`:``;
        withKeyword.length>0?qParams+=`&with_keywords=${withKeyword}`:``;
        with_runtime_gte>0?qParams+=`&with_runtime.gte=${with_runtime_gte}`:``
        with_runtime_lte<400?qParams+=`&with_runtime.lte=${with_runtime_lte}`:``
      }
  
    // console.log(qParams);
    return qParams;
  }
}
