import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature.routing.module';
import { HomeModule } from './home/home.module';
import { ListModule } from './List/list.module';
import { DetailsModule } from './details/details.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    HomeModule,
    ListModule,
    DetailsModule,
    SharedModule
  ],
  exports: [HomeModule, ListModule],
})
export class FeatureModule {}
