import { castDetailsEffects } from "./cast-details.effects";
import { movieDetailsEffects } from "./movie-details.effects";
import { recommendationEffect } from "./recommendation.effects";
import { tvDetailsEffects } from "./tv-details.effects";

export const detailsEffect=[
    movieDetailsEffects,
    castDetailsEffects,
    tvDetailsEffects,
    recommendationEffect
]