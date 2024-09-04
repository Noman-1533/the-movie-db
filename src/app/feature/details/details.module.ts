import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule } from './details.routing.module';
import { DetailsComponent } from './details.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { detailsReducer } from './state/reducers/index.reducers';
import { EffectsModule } from '@ngrx/effects';
import { detailsEffect } from './state/effects/index.effects';
import { CastDetailsComponent } from './components/cast-details/cast-details.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SeasonDetailsComponent } from './components/season-details/season-details.component';
import { DescriptionComponent } from './components/movie-details/description/description.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';



@NgModule({
  declarations: [
    DetailsComponent,
    CastDetailsComponent,
    MovieDetailsComponent,
    SeasonDetailsComponent,
    DescriptionComponent,
    RecommendationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature('details',detailsReducer),
    EffectsModule.forFeature(detailsEffect),
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
