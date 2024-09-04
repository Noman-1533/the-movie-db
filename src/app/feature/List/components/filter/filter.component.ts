import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { genre } from '../../../details/models/details.model';
import { ListFacadeService } from '../../services/list-facade.service';
import { Observable, of } from 'rxjs';
import { SharedFacadeService } from '../../../../shared/services/shared.facade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatExpansionPanel } from '@angular/material/expansion';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class FilterComponent implements OnInit,AfterViewInit {
  
  genres: Observable<genre[]>;
  selectedInitialReleaseDate:Date;
  selectedFinalReleaseDate:Date=new Date('2024-12-31');
  selectedGenreId: number[] = [];
  selectedFirstUserScore: number = 0;
  selectedLastUserScore: number = 10;
  selectedUserVote: number = 0;
  SelectedFirstRuntime: number = 0;
  SelectedLastRuntime: number = 400;
  APIQueryParams: string;
  pageType: string='movie';
  dataType: string;

  sortTypes = [
    { viewValue: 'Popularity Descending', queryValue: 'popularity.desc' },
    { viewValue: 'Popularity Ascending', queryValue: 'popularity.asc' },
    { viewValue: 'Rating Descending', queryValue: 'vote_average.desc' },
    { viewValue: 'Rating Ascending', queryValue: 'vote_average.asc' },
    {
      viewValue: 'Release Date Descending',
      queryValue: this.pageType!=='tv'?'primary_release_date.desc':'first_air_date.desc',
    },
    {
      viewValue: 'Release Date Ascending',
      queryValue:this.pageType!=='tv'? 'primary_release_date.asc':'first_air_date.asc',
    },
    { viewValue: 'Title (A-Z)', queryValue:this.pageType!=='tv'? 'title.desc':'name.desc' },
    { viewValue: 'Title (Z-A)', queryValue:this.pageType!=='tv'? 'title.asc':'name.asc' },
  ];

  selectedSortType = this.sortTypes[0].queryValue;

  constructor(
    private listFacadeService: ListFacadeService,
    private sharedFacade: SharedFacadeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  @ViewChild('expansionPanel!') expansionPanel!: MatExpansionPanel;

  ngOnInit(): void {
        this.listFacadeService.getGenres().subscribe((res) => {
      res.subscribe((data) => {
        this.genres = of(data.genres);
      });
    });
    if(this.activatedRoute.paramMap)
    this.activatedRoute.paramMap.subscribe((params)=>
    {
      this.pageType=params.get('list-type')
      // console.log(this.pageType)
    })
    if(this.activatedRoute.queryParams)
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.selectedInitialReleaseDate = queryParams['release_date.gte']?new Date(queryParams['release_date.gte']) : null;
      this.selectedFinalReleaseDate = queryParams['release_date.lte']?new Date(queryParams['release_date.lte']) : this.selectedFinalReleaseDate|| null;
      this.selectedGenreId = queryParams['with_genres']
        ? queryParams['with_genres'].split(',').map(Number)
        : [];
      this.selectedSortType = queryParams['sort_by']||'popularity.desc';
      this.selectedFirstUserScore = queryParams['vote_average.gte'] || 0;
      this.selectedLastUserScore = queryParams['vote_average.lte'] || 10;
      this.selectedUserVote = queryParams['vote_count.gte'] || 0;
      // this.vote
      this.SelectedFirstRuntime = queryParams['with_runtime.gte'] || 0;
      this.SelectedLastRuntime = queryParams['with_runtime.lte'] || 400;
    });
  }

  ngAfterViewInit(): void {
    this.checkScreenSize();
    this.changeDetectorRef.detectChanges();
  }
@HostListener('window:resize', ['$event'])onResize(event: any) {
    this.checkScreenSize();
  }
 private checkScreenSize() {
    if (window.outerWidth <= 768 ) {
      this.expansionPanel.close();
    }
    else if(window.outerWidth>768){
      this.expansionPanel.open()
    }
   
  }
  onSelectGenre(id: number) {
    this.selectedGenreId.find((num) => num === id)
      ? (this.selectedGenreId = this.selectedGenreId.filter(
          (num) => num !== id
        ))
      : this.selectedGenreId.push(id);
  }
  isGenreSelected(id: number) {
    return this.selectedGenreId.find((num) => num === id);
  }
  getStyle(id: number) {
    return {
      color: this.isGenreSelected(id) ? 'white' : '',
      'background-color': this.isGenreSelected(id) ? 'rgb(40, 181, 225)' : '',
    };
  }

  getCurrentQueryParamObject(){
    return {
      adult: false,
      video: false,
      language: 'en-US',
      page: 1,
      releaseDate_gte: this.selectedInitialReleaseDate!==null
        ? this.selectedInitialReleaseDate.toISOString().slice(0, 10)
        : '',
      releaseDate_lte: this.selectedFinalReleaseDate
        ? this.selectedFinalReleaseDate.toISOString().slice(0, 10)
        : '',
      sortBy: this.selectedSortType,
      vote_average_gte: this.selectedFirstUserScore,
      vote_average_lte: this.selectedLastUserScore,
      vote_count_gte: this.selectedUserVote,
      vote_count_lte: 0,
      with_genres:
        this.selectedGenreId.length > 0 ? this.selectedGenreId.toString() : '',
      with_keyword: '',
      with_runtime_gte:this.SelectedFirstRuntime,
      with_runtime_lte:this.SelectedLastRuntime
    };
  }

  onFilterClicked() {
    let queryParamObject = this.getCurrentQueryParamObject();
    this.APIQueryParams = this.sharedFacade.getAPIParams((queryParamObject));
    this.router.navigate([],{
      relativeTo:this.activatedRoute,
      queryParams:this.convertQueryParamsToObject(this.APIQueryParams)
    })
    
  }
  private convertQueryParamsToObject(queryParamsString: string): { [key: string]: any } {
    const queryParams = new URLSearchParams(queryParamsString);
    const paramsObject: { [key: string]: any } = {};
    queryParams.forEach((value, key) => {
      paramsObject[key] = value;
    });
    return paramsObject;
  }
}
