import { Component, OnInit } from '@angular/core';
import { PageSingleCardViewModel } from '../home/model/cardModel';
import { SharedFacadeService } from '../../shared/services/shared.facade.service';
import { SharedModule } from '../../shared/shared.module';
import { SearchService } from './services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent implements OnInit{
  searchLoading:boolean;
  searchResult:PageSingleCardViewModel[]=[];
  queryParams;
  constructor(private searchService:SearchService,private sharedFacade:SharedFacadeService,private route:ActivatedRoute){}
ngOnInit(): void {
  if(this.route.queryParams)
    this.route.queryParams.subscribe((res) => {
      this.queryParams = decodeURIComponent(res['query']);
      console.log(this.queryParams)
      this.searchService.onSearchClicked(this.queryParams);
    });
    
  this.searchService.searchLoading.subscribe((res)=>{
    if(res){
      this.searchLoading=res;
      this.searchResult=this.sharedFacade.getSinglePageCardViewData(this.searchService.searchResult);
      this.searchService.searchLoading.next(false);
    }
  })
}

}
