import { Component, Input } from '@angular/core';
import { SharedFacadeService } from '../../services/shared.facade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input('name') cardTitle: string = 'Card Title';
  @Input('image') imagePath: string = '';
  @Input('subtitle') cardSubtitle: string = 'Card Subtitle';
  @Input('id') cardId: number;
  @Input('type') cardType: string;
  constructor(
    private sharedFacade: SharedFacadeService,
    private router: Router
  ) {}
  onClickCard(movieId: string) {
    console.log(movieId, this.cardId);
    this.sharedFacade.setCurrentMovieId(this.cardId, this.cardType);
    // console.log(
    this.router.navigate([this.cardType, 'details', this.cardId]);
  }
}
