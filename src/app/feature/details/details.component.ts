import { Component, OnInit } from '@angular/core';
import { DetailsFacadeService } from './services/details.facade.service';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{

  ngOnInit(): void {
      // this.detailsFacade.selectMovieDetails();
  }
}
