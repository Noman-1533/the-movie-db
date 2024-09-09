import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SharedFacadeService } from '../../../shared/services/shared.facade.service';
import { PageSingleCardModel, PageCardData } from '../../home/model/cardModel';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResult:PageSingleCardModel[];
  headerSearchResults:PageSingleCardModel[];
  searchLoading=new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient,private sharedFacade:SharedFacadeService) { }

  onSearchQueryChangeAction(searchQuery:string,route:ActivatedRoute,router:Router){
    if(searchQuery){
      let params=this.getParamsObject(searchQuery)
      router.navigate([],{
        relativeTo:route,
        queryParams:params,
      })
    }
    else if(searchQuery==='') {
      router.navigate([], {
        relativeTo: route,
        queryParams: { search: null },
      });
   }
  }
  getSearchResults(searchQuery:string,type:string='multi'){
    let params=this.sharedFacade.getAPIParams({query:searchQuery,isForSearch:true})
    return this.http.get<PageCardData>(`${environment.BASE_URL}/search/${type}?${params}`)
  }

  onSearchClicked(searchQuery:string,type:string='multi'){
    this.searchResult=[];
   this.getSearchResults(searchQuery,type).subscribe((res)=>{
      if(res)
      {
          this.searchResult=res.results.filter((item)=>
            (item.media_type==='movie'||item.media_type==='tv')
          );
        this.searchLoading.next(true);
      }

     })
  }
  onHeaderSearch(searchQuery:string,type:string='multi'){
  
    this.headerSearchResults=[];
   this.getSearchResults(searchQuery,type).subscribe((res)=>{
      if(res)
      {
        this.headerSearchResults=res.results.filter((item)=>
          (item.media_type==='movie'||item.media_type==='tv')
        );
        this.searchLoading.next(true)
      }

     })
  }

  getParamsObject(searchQuery:string){
    return {query:searchQuery,page:1,language:'en-US',include_adult:false}
  }
  getHeaderSearchResult():string[]{
    let results:string[]=[];
        this.headerSearchResults.forEach((item)=>{
          results.push(item.name||item.title)
        })
     
    return (results.splice(0,10));
  }
}
