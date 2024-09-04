export interface genre {
  id: number;
  name: string;
}
export interface productionCompany {
  id: number;
  logo_path: string;
  name: string;
  original_country: string;
}

export interface createdBy {
  id?: number;
  credit_id?: string;
  name?: string;
  gender?: number;
  profile_path?: string;
}
export interface productionCountry {
  iso_3166_1: string;
  name: string;
}
export interface spokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface episode {
  id?: number;
  name?: string;
  overview?: string;
  vote_average?: number;
  vote_count?: number;
  air_date?: string;
  episode_number?: number;
  production_code?: string;
  runtime?: number;
  season_number?: number;
  show_id?: number;
  still_path?: string;
}
export interface Collection {
  backdrop_path: string;
  id: number;
  name: string;
  poster_path: string;
}
export interface network {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
export interface season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}
export interface CommonDetails {
  adult?: boolean;
  backdrop_path?: string;
  genres?: genre[];
  homepage?: string;
  id?: number;
  original_country?: string[];
  original_language?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: productionCompany[];
  production_countries?: productionCountry[];
  spoken_languages?: spokenLanguage[];
  status?: string;
  tagline?: string;
  vote_average?: number;
  vote_count?: number;
}
export interface MovieDetails {
  adult?: boolean;
  backdrop_path?: string;
  genres?: genre[];
  homepage?: string;
  id?: number;
  original_country?: string[];
  original_language?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: productionCompany[];
  production_countries?: productionCountry[];
  spoken_languages?: spokenLanguage[];
  status?: string;
  tagline?: string;
  vote_average?: number;
  vote_count?: number;
  // common_details?: CommonDetails,
  belongs_to_collection?: Collection;
  budget?: number;
  imdb_id?: string;
  original_title?: string;
  release_date?: string;
  revenue?: number;
  runtime?: number;
  title?: string;
  video?: boolean;
}
export interface TVDetails {
  // common_details?:CommonDetails,
  adult?: boolean;
  backdrop_path?: string;
  genres?: genre[];
  homepage?: string;
  id?: number;
  original_country?: string[];
  original_language?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: productionCompany[];
  production_countries?: productionCountry[];
  spoken_languages?: spokenLanguage[];
  status?: string;
  tagline?: string;
  vote_average?: number;
  vote_count?: number;
  created_by?: createdBy[];
  episode_run_time?: number[];
  first_air_date?: string;
  in_production?: string;
  last_air_date?: string;
  last_episode_to_air?: episode;
  name?: string;
  next_episode_to_air?: episode | null;
  networks?: network[];
  number_of_episodes?: number;
  number_of_season?: number;
  original_name?: string;
  seasons?: season[];
  type?: string;
}
export interface CastDetails {
  adult?: boolean;
  also_known_as?: string[];
  biography?: string;
  birthday?: string;
  deathday?: string | null;
  gender?: number;
  homepage?: string | null;
  id?: number;
  imdb_id?: string;
  known_for_department?: string;
  name?: string;
  place_of_birth?: string;
  popularity?: number;
  profile_path?: string;
}
