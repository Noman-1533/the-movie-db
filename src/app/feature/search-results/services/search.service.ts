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
      // Remove query parameter when input is empty
      router.navigate([], {
        relativeTo: route,
        queryParams: { search: null },
      });
   }
  }

  onSearchClicked(searchQuery:string,type:string='multi'){
    let params=this.sharedFacade.getAPIParams({query:searchQuery,isForSearch:true})
    this.searchResult=[];
     this.http.get<PageCardData>(`${environment.BASE_URL}/search/${type}?${params}`).subscribe((res)=>{
      if(res)
      {
        this.searchResult=res.results;
        this.searchLoading.next(true);
        // console.log(this.searchResult)
      }

     })
  }

  getParamsObject(searchQuery:string){
    return {query:searchQuery,page:1,language:'en-US',include_adult:false}
  }
  getHeaderSearchResult():Observable<string[]>{
    let results:string[]=[];
        this.searchResult.forEach((item)=>{
          results.push(item.name||item.title)
        
        })
     
    return of(results.splice(0,10));
  }
}
