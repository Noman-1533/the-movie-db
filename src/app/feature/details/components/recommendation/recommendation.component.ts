import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageSingleCardModel, PageSingleCardViewModel } from '../../../home/model/cardModel';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.scss'
})
export class RecommendationComponent implements OnInit{
  @Input('loading')recommendationLoading$:Observable<boolean>;
  @Input('data') recommendationData$:Observable<PageSingleCardViewModel[]>;
  @Input('error')recommendationError$:Observable<any>;
  containerName:string='Recommendations'
  constructor(){}
  ngOnInit(): void {
    if(this.recommendationData$)
      this.recommendationData$.subscribe((res)=>console.log('response from recommendation component',res))
  }
}
