import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ListComponent } from './list.component';
import { StoreModule } from '@ngrx/store';
import { listReducers } from './state/reducers/index.reducers';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './state/effects/index.effects';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { MovieFeature } from './state/reducers/movie-list.feature';
import { TVListFeature } from './state/reducers/tv-list.feature';
import { CustomPaginatorComponent } from './components/custom-paginator/custom-paginator.component';



@NgModule({
  declarations: [
    ListComponent,
    FilterComponent,
    CustomPaginatorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ListRoutingModule,
    SharedModule,
    StoreModule.forFeature('List',listReducers),
    StoreModule.forFeature(MovieFeature),
    StoreModule.forFeature(TVListFeature),
    EffectsModule.forFeature(Effects),
  ],
  exports:[
    ListComponent,FilterComponent
    
  ]
})
export class ListModule { }
