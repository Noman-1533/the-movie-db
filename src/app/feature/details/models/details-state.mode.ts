import { CastDetails, MovieDetails, TVDetails } from "./details.model";

export interface pageDetailsState{
    data:MovieDetails|TVDetails|CastDetails,
    // data:any,
    loading:boolean,
    error:any
}
export interface recommendationState{
    data: MovieDetails[] | TVDetails[],
    loading: boolean,
    error:any    
}
export interface detailsModuleState{
    castDetails:pageDetailsState,
    movieDetails:pageDetailsState,
    tvDetails: pageDetailsState,
    recommendation:recommendationState,
}
