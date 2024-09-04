import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { RouterModule } from '@angular/router';
import { DetailsResolver } from '../../core/resolvers/details.resolver';

const routes=[
  {
    path:'',component:DetailsComponent,
    resolve:{data:DetailsResolver}
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DetailsRoutingModule { }
