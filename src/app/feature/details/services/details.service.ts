import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import {
  CastDetails,
  CommonDetails,
  MovieDetails,
  TVDetails,
} from '../models/details.model';
import { environment } from '../../../../environments/environment';
import { MovieDescriptionModel } from '../models/movie-tv-details.model';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  currentCardId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  currentCardType: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient) {}
  getDetails(type: string, id: number) {
    return this.http.get<MovieDetails | CastDetails | TVDetails>(
      `${environment.BASE_URL}/${type}/${id}?language=en-US`
    );
  }
  getRecommendation(type: string, id: number) {
    return this.http.get<MovieDetails[] | TVDetails[]>(
      `${environment.BASE_URL}/${type}/${id}/recommendations?language=en-US&page=1`
    );
  }
  convertMinuteToHour(time: number): string {
    let hour: number = 0;
    let minute: number = 0;
    hour = parseInt((time / 60).toString());
    minute = time % 60;
    // console.log('hour=> ',hour.toString(),'minute => ',minute.toString())
    let stringTime: string =
      hour > 0
        ? hour.toString() + 'h ' + minute.toString() + 'm'
        : '' + minute.toString() + 'm';
    return stringTime;
  }
  getShortDescription(data$: Observable<any>) {
    let shortDescription: MovieDescriptionModel;
    // console.log(data$);
    data$.subscribe((res) => {
      // console.log('from details service', res);
      // let commonDetails:CommonDetails=res.common_details
      // console.log('common details',commonDetails);
      if (res != null) {
        shortDescription = {
          background_image:
            environment.IMAGE_BASE_URL +
            environment.IMAGE_SIZES.w1280 +
            res.backdrop_path,
          poster_image:
            environment.IMAGE_BASE_URL +
            environment.IMAGE_SIZES.w1280 +
            res.poster_path,
          id: res.id,
          title: res.original_name || res.title,
          release_date: res.first_air_date || res.release_date,
          genres: res.genres,
          runtime: this.convertMinuteToHour(res.runtime),
          ratting: parseFloat(res.vote_average.toFixed(1)) * 10,
          tagline: res.tagline,
          overview: res.overview,
        };
        // console.log('description',shortDescription);
      }
    });

    return shortDescription;
  }
 
}
