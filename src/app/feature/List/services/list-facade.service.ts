import { Injectable } from '@angular/core';
import { ListService } from './list.service';
import { Store } from '@ngrx/store';
import { listModuleState } from '../models/list-state.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListFacadeService {
  queryParams=new BehaviorSubject<string>('');
  isFilterItem=new BehaviorSubject<boolean>(false);

  constructor(private listService: ListService) {}
 
  loadData(type: string, subtype: string,queryParams:string) {
    this.listService.loadStoreData(type,subtype,queryParams)
  }
  loadMoreData(type:string,subtype:string,queryParams:string){
    this.listService.loadStoreData(type,subtype,queryParams,true);

  }
  
  selectSelectorData(loadingSelector, dataSelector, errorSelector) {
    return this.listService.selectListData(loadingSelector,dataSelector,errorSelector)
  }
  
  getList(type: string, subType: string, queryParams: string) {
    // console.log('query params form facade',queryParams)
    return this.listService.getListData(type, subType, queryParams);
  }
  getGenres(){
    return this.listService.getGenres();
  }
  loadGenres(type:string){
    this.listService.loadGenres(type);
  }


  getSelectedStoreData(type:string,subtype:string){
    return this.listService.selectStoreData(type,subtype);
  }
  getSelectedStoreDataFromSingleSelector(type:string){
    return this.listService.selectSingleListData(type);
  }
  getQueryListObject(queryParams){
    return this.listService.createQueryParamObject(queryParams);
  }

}
