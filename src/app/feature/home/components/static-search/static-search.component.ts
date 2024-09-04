import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../../../search-results/services/search.service';

@Component({
  selector: 'app-static-search',
  templateUrl: './static-search.component.html',
  styleUrl: './static-search.component.scss'
})
  export class StaticSearchComponent implements OnInit {
    backgroundImage: string;
    searchQuery:string='';
    constructor(private router:Router,private route:ActivatedRoute,private searchService:SearchService) {}
    ngOnInit(): void {
      this.fetchRandomBackground();
      
    }
     onSearchQueryChange(){
    this.searchService.onSearchQueryChangeAction(this.searchQuery,this.route,this.router);
    }
    onSearch(){
      this.searchService.onSearchClicked(this.searchQuery);
      this.route.queryParams.subscribe((res)=>{

        this.router.navigate(['/search'],{
          queryParams:res
        })
      })
    }
  
    fetchRandomBackground() {
      
        this.backgroundImage = 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg';
    }
  }
