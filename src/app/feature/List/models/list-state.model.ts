import { Observable } from "rxjs";
import { pageDetailsState } from "../../details/models/details-state.mode";
import { PageCardData } from "../../home/model/cardModel";

export interface listState{
    data:PageCardData,
    loading:boolean,
    error:any,
  
}
export interface listSelectorState{
    data$:Observable<PageCardData>,
    loading$:Observable<boolean>,
    error$:Observable<any>
}
export interface listModuleState{
    popularMovieList:listState,
    nowPlayingMovieList:listState,
    upcomingMovieList:listState,
    topRattedMovieList:listState,

    popularTVList:listState,
    airingTodayTVList:listState,
    onTVList:listState,
    topRattedTVList:listState,

    popularPeopleList:listState
}

export const initialListState:listState={
    data:{
        page:0,
        results:[],
        total_pages:0,
        total_results:0
    },
    loading:false,
    error:null,
    
}

export interface listPropsType{
    type:string,
    subType:string,
    queryParams:string
}
