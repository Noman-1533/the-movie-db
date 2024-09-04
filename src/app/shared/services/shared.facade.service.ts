import { Injectable } from '@angular/core';
import { DetailsService } from '../../feature/details/services/details.service';
import { HomeFacadeService } from '../../feature/home/home-facade.service';
import { SharedService } from './shared.service';
import { PageSingleCardModel } from '../../feature/home/model/cardModel';

@Injectable({
  providedIn: 'root',
})
export class SharedFacadeService {
  constructor(private detailsService: DetailsService,private sharedService:SharedService) {}

  setCurrentMovieId(currentCardId: number, currentCardType: string) {
    this.detailsService.currentCardId.next(currentCardId);
    this.detailsService.currentCardType.next(currentCardType);
  }
  
  switchButton(pageName:string,containerType:string,primaryButton:string,secondaryButton:string,defaultButtonSelected:boolean){
    this.sharedService.switchButton(pageName,containerType,primaryButton,secondaryButton,defaultButtonSelected);
  }

  getSinglePageCardViewData(result:PageSingleCardModel[]){
   return this.sharedService.getCardViewData(result);
  }

   getAPIParams({
    adult = false,
    video = false,
    language = 'en-US',
    page = 1,
    releaseDate_gte = '',
    releaseDate_lte = '',
    sortBy = 'popularity.desc',
    vote_average_gte = 0,
    vote_average_lte = 10,
    vote_count_gte = 0,
    vote_count_lte = 0,
    with_genres = '',
    with_keyword = '',
    with_runtime_gte=0,
    with_runtime_lte=400,
    query='',
    isForSearch=false
  } = {}) {
    return this.sharedService.createQParams(adult, video, language, page, releaseDate_gte, releaseDate_lte, sortBy, vote_average_gte, vote_average_lte, vote_count_gte, vote_count_lte, with_genres, with_keyword,with_runtime_gte,with_runtime_lte,query,isForSearch);
  }
  
}
