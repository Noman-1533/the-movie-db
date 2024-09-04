import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { StaticSearchComponent } from './components/static-search/static-search.component';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { trendingFeature } from './state/reducers/trending.reducer';
import { Effect } from './state/effects/home.effect';
// import { homeReducer } from './state/reducers/home.reducer';
import { TrendingEffects } from './state/effects/trending.effect';
import { PopularEffects } from './state/effects/popular.effect';
import { HomePageContainerComponent } from './components/home-page-container/home-page-container.component';
import { popularFeature } from './state/reducers/popular.reducer';



@NgModule({
  declarations: [
    StaticSearchComponent,
    HomeComponent,
    HomePageContainerComponent,
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    // StoreModule.forFeature('Home', homeReducer),
    StoreModule.forFeature(popularFeature),
    StoreModule.forFeature(trendingFeature),
    EffectsModule.forFeature(Effect)
  ],
  exports: [HomeComponent,StaticSearchComponent]
})
export class HomeModule { }
