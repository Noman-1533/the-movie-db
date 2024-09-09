import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedFacadeService } from '../../../../shared/services/shared.facade.service';
import { SearchService } from '../../../../feature/search-results/services/search.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewChecked{
  navButtons = [
    {
      title: 'Movies',
      menuItems: [
        { title: 'Popular', navLink: 'list/movie/popular' },
        { title: 'Now Playing', navLink: 'list/movie/now_playing' },
        { title: 'Upcoming', navLink: 'list/movie/upcoming' },
        { title: 'Top Rated', navLink: 'list/movie/top_rated' },
      ],
      isOpen: false,
    },
    {
      title: 'TV Shows',
      menuItems: [
        { title: 'Popular', navLink: 'list/tv/popular' },
        { title: 'Airing Today', navLink: 'list/tv/airing_today' },
        { title: 'On TV', navLink: 'list/tv/on_the_air' },
        { title: 'Top Rated', navLink: 'list/tv/top_rated' },
      ],
      isOpen: false,
    },
    {
      title: 'People',
      menuItems: [{ title: 'Popular People', navLink: 'list/people/popular' }],
      isOpen: false,
    },
    {
      title: 'More',
      menuItems: [
        { title: 'Discussion', navLink: '' },
        { title: 'Leaderboard', navLink: '' },
        { title: 'Support', navLink: '' },
        { title: 'API', navLink: '' },
      ],
      isOpen: false,
    },
  ];
  currentMenu;
  selectedMenu;
  preTrigger;
  curTrigger;

  timedOutCloser;
  targetMenuTrigger;

  searchToggle: boolean = false;
  searchQuery: string = '';
  searchLoading$: BehaviorSubject<boolean>;
  searchResults: string[]=[];
  loading: boolean = false;

  @ViewChild('searchInput',{static:false})searchInput:ElementRef
  constructor(
    private router: Router,
    private sharedFacade: SharedFacadeService,
    private searchService: SearchService,
  ) {}

  // mouseEnter(trigger, index) {
  //   if (this.preTrigger && this.preTrigger != trigger) {
  //     this.preTrigger.closeMenu();
  //   }
  //   this.navButtons[index].isOpen = true;
  //   for (let i = 0; i < this.navButtons.length; i++) {
  //     if (i != index) {
  //       this.navButtons[i].isOpen = false;
  //     }
  //   }
  //   this.currentMenu = this.navButtons[index].title;
  //   // if (this.timedOutCloser)
  //   // {
  //   //   clearTimeout(this.timedOutCloser);
  //   // }
  //   trigger.openMenu();
  // }

  // mouseLeave(trigger, index) {
  //   this.preTrigger = trigger;
  //   if (this.preTrigger != trigger) {
  //   }
  //   // if (!this.navButtons[index].isOpen) {
  //   //   trigger.closeMenu();
  //   // }
  //   // this.timedOutCloser = setTimeout(() => {
  //   //   trigger.closeMenu();
  //   // }, 50);
  // }


  hoveredMenu: number | null = null;

openMenu(index: number) {
  this.hoveredMenu = index;
}

closeMenu(index: number) {
  this.hoveredMenu = null;
}
  ngAfterViewChecked(){
    if(this.searchToggle){
      if(this.searchInput){
        this.searchInput.nativeElement.focus();
      }
    }
  }
  onClick(url: string = '') {
    let qParams = this.convertQueryParamsToObject(
      this.sharedFacade.getAPIParams({
        language: 'en-US',
        page: 1,
        adult: false,
      })
    );
    // console.log('q params from header',qParams)
    // this.router.navigateByUrl(`${url}?${qParams}`);
    this.searchToggle = false;
    this.router.navigate([url], { queryParams: qParams });
  }

  convertQueryParamsToObject(queryParamsString: string): {
    [key: string]: any;
  } {
    const queryParams = new URLSearchParams(queryParamsString);
    const paramsObject: { [key: string]: any } = {};
    queryParams.forEach((value, key) => {
      paramsObject[key] = value;
    });
    return paramsObject;
  }
  toggleSearch() {
    this.searchToggle = !this.searchToggle;
  }
  onClearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }
  createSearch() {
    this.loading = true;
    this.searchLoading$ = this.searchService.searchLoading;

    this.searchService.onHeaderSearch(this.searchQuery);
    this.searchLoading$.subscribe((res) => {
      if (res) {
        this.searchResults = this.searchService.getHeaderSearchResult();
      }
      setTimeout(() => {
        this.loading = false;
      }, 300);
    });
    //  this.searchResults.subscribe((res)=>{
    //   console.log(res)
    //  })
  }

  searchSingleItem(queryString: string) {
    // this.searchService.onSearchClicked(queryString);
    this.searchToggle = false;
    this.searchResults = [];
    this.router.navigate(['/search'], {
      queryParams: this.searchService.getParamsObject(queryString),
    });
  }
}
