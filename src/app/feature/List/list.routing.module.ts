import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListResolver } from '../../core/resolvers/list.resolver';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { FilterComponent } from './components/filter/filter.component';


const routes=[
  {
    path:':list-type/:list-subtype',component:ListComponent,
    resolve:{data:ListResolver}
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class ListRoutingModule { }
