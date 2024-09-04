import { createAction, props } from "@ngrx/store";
import { PageCardData } from "../../../home/model/cardModel";
import { listPropsType } from "../../models/list-state.model";

// Popular

export const loadPopularTVList=createAction('[List-TV] Popular TV List',props<{data:listPropsType}>());

export const loadPopularTVListSuccess=createAction('[List-TV] Popular TV List Success',props<{data:PageCardData}>());

export const loadPopularTVListFailure=createAction('[List-TV] Popular TV List Failure',props<{error:any}>());

export const loadMorePopularTVList = createAction(
    '[List-TV] Load More Popular TV List',
    props<{ data: listPropsType }>()
  );
  
  export const loadMorePopularTVListSuccess = createAction(
    '[List-TV] Load More Popular TV List Success',
    props<{ data: PageCardData }>()
  );
  
  export const loadMorePopularTVListFailure = createAction(
    '[List-TV] Load More Popular TV List Failure',
    props<{ error: any }>()
  );
  

// Airing Today 

export const loadAiringTodayTVList=createAction('[List-TV] AiringToday TV List',props<{data:listPropsType}>());

export const loadAiringTodayTVListSuccess=createAction('[List-TV] AiringToday TV List Success',props<{data:PageCardData}>());

export const loadAiringTodayTVListFailure=createAction('[List-TV] AiringToday TV List Failure',props<{error:any}>());
export const loadMoreAiringTodayTVList = createAction(
    '[List-TV] Load More AiringToday TV List',
    props<{ data: listPropsType }>()
  );
  
  export const loadMoreAiringTodayTVListSuccess = createAction(
    '[List-TV] Load More AiringToday TV List Success',
    props<{ data: PageCardData }>()
  );
  
  export const loadMoreAiringTodayTVListFailure = createAction(
    '[List-TV] Load More AiringToday TV List Failure',
    props<{ error: any }>()
  );
  

// On TV

export const loadOnTVList=createAction('[List-TV] On TV List',props<{data:listPropsType}>());

export const loadOnTVListSuccess=createAction('[List-TV] On TV List Success',props<{data:PageCardData}>());

export const loadOnTVListFailure=createAction('[List-TV] On TV List Failure',props<{error:any}>());
export const loadMoreOnTVList = createAction(
    '[List-TV] Load More On TV List',
    props<{ data: listPropsType }>()
  );
  
  export const loadMoreOnTVListSuccess = createAction(
    '[List-TV] Load More On TV List Success',
    props<{ data: PageCardData }>()
  );
  
  export const loadMoreOnTVListFailure = createAction(
    '[List-TV] Load More On TV List Failure',
    props<{ error: any }>()
  );
  

// Top Ratted

export const loadTopRattedTVList=createAction('[List-TV] TopRatted TV List',props<{data:listPropsType}>());

export const loadTopRattedTVListSuccess=createAction('[List-TV] TopRatted TV List Success',props<{data:PageCardData}>());

export const loadTopRattedTVListFailure=createAction('[List-TV] TopRatted TV List Failure',props<{error:any}>());
export const loadMoreTopRatedTVList = createAction(
    '[List-TV] Load More TopRated TV List',
    props<{ data: listPropsType }>()
  );
  
  export const loadMoreTopRatedTVListSuccess = createAction(
    '[List-TV] Load More TopRated TV List Success',
    props<{ data: PageCardData }>()
  );
  
  export const loadMoreTopRatedTVListFailure = createAction(
    '[List-TV] Load More TopRated TV List Failure',
    props<{ error: any }>()
  );
  


// just tv list action

export const loadTVList=createAction('[List-TV] TV List',props<{data:{type:string,subType:string,queryParams:string}}>());

export const loadTVListSuccess=createAction('[List-TV] TV List Success',props<{data:PageCardData}>());

export const loadTVListFailure=createAction('[List-TV] TV List Failure',props<{error:any}>());


export const loadMoreTVList=createAction('[List-TV] Load More TV List',props<{data:{type:string,subType:string,queryParams:string}}>());
export const loadMoreTVListSuccess=createAction('[List-TV] Load More TV List Success',props<{data:PageCardData}>());
export const loadMoreTVListFailure=createAction('[List-TV] Load More TV List Failure',props<{error:any}>());