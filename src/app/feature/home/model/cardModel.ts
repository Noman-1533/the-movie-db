export interface PageSingleCardModel{
    adult:boolean,
    backdrop_path:string,
    genre_ids:number[],
    id:number,
    media_type:string,
    original_language:string,
    original_title?:string,
    name?:string,
    original_country?:string[],
    overview:string,
    popularity:number,
    poster_path:string,
    release_date?:string,
    first_air_date?:string,
    title:string,
    video?:boolean,
    vote_average:number,
    vote_count:number    
}
export interface PageCardData{
    page:number,
    dates?:{
        maximum:string,
        minimum:string,
    },
    results:PageSingleCardModel[],
    total_pages:number,
    total_results:number
}

export interface PageSingleCardViewModel{
    id:number,
    cardTitle:string,
    cardSubtitle:string,
    cardRatting?:number,
    cardImage:string,
    cardType:string,

}
