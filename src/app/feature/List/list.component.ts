import { Component, OnInit } from '@angular/core';
import { ListFacadeService } from './services/list-facade.service';
import * as MovieListSelector from './state/selectors/movie-list.selectors';
import * as TVListSelector from './state/selectors/tv-list.selectors';
import * as PeopleListSelector from './state/selectors/people-list.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { listSelectorState } from './models/list-state.model';
import { PageSingleCardViewModel } from '../home/model/cardModel';
import {
  BehaviorSubject,
  combineLatest,
  merge,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { SharedFacadeService } from '../../shared/services/shared.facade.service';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { PaginatorIntlService } from './services/paginator-intl.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers:[{provide:MatPaginatorIntl,useClass:PaginatorIntlService}]
})
export class ListComponent implements OnInit {
  type: string;
  subtype: string;
  listData: listSelectorState;
  listViewContent: PageSingleCardViewModel[];
  pageNo: number = 1;
  queryParams: string = '';
  loading$: Observable<boolean>;
  isFilterClicked: boolean = false;
  queryParamObject = {};
  isUrlChange = new BehaviorSubject<boolean>(false);
  currentPage:number=0;
  totalResults:number=0;
  constructor(
    private listFacade: ListFacadeService,
    private sharedFacadeService: SharedFacadeService,
    private route: ActivatedRoute,
    private router:Router,
  ) {}
  ngOnInit(): void {
    this.isUrlChange.next(false);
    if (this.route.params) 
      {
      this.route.paramMap.subscribe((params) => {
        this.type = params.get('list-type');
        this.subtype = params.get('list-subtype');
        this.isUrlChange.next(true);
      });
      

      this.route.queryParamMap.subscribe((queryParams) => {
        this.queryParamObject = {};
        queryParams.keys.forEach((key) => {
          this.queryParamObject[key] = queryParams.get(key);
        });
        this.currentPage=this.queryParamObject['page']-1;
        if(this.type===this.route.snapshot.paramMap.get('list-type'))
          this.listFacade.loadData(
            this.type,
            this.subtype,
            this.sharedFacadeService.getAPIParams(
              this.listFacade.getQueryListObject(this.queryParamObject)
            )
          );
        })
        this.isUrlChange.next(true);
  
      
  
      this.isUrlChange.subscribe((res) => {
        if (res) this.selectData();
      });
    }

    
  }

  selectData() {
    this.listData = this.listFacade.getSelectedStoreData(
      this.type,
      this.subtype
    );
    if (this.listData) this.loading$ = this.listData.loading$;
    this.listData.data$.subscribe((res) => {
      if (res) {
       if(res.total_results)this.totalResults=res.total_results;
        this.listViewContent =
          this.sharedFacadeService.getSinglePageCardViewData(res.results);
        for (let i = 0; i < this.listViewContent.length; i++) {
          this.listViewContent[i].cardType = this.type;
        }
        {
          window.scrollTo({
            top:0,
            behavior:'smooth'
          })
        }
      }
    });
  }

  OnClickLoadMore() {
   
    let qParam = { ...this.queryParamObject };
    this.pageNo++;
    qParam['page'] = this.pageNo;
    console.log('load for query params', qParam);
    this.listFacade.loadMoreData(
      this.type,
      this.subtype,
      this.sharedFacadeService.getAPIParams(
        this.listFacade.getQueryListObject(qParam)
      )
    );
    
  }

  OnClickPaginatorPageChange(pageEvent:PageEvent){
    let qParam={...this.queryParamObject};
    qParam['page']=pageEvent.pageIndex+1;
    this.router.navigate([],{
      relativeTo:this.route,
      queryParams:qParam
    })
    console.log('page event are',pageEvent)
  }
}
