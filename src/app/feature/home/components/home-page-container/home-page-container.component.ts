import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PageSingleCardViewModel } from '../../model/cardModel';

@Component({
  selector: 'app-home-page-container',
  templateUrl: './home-page-container.component.html',
  styleUrl: './home-page-container.component.scss'
})
export class HomePageContainerComponent {
  @Input('type')containerType:string;
  @Input('content') containerContent$:Observable<PageSingleCardViewModel[]>;
  @Input() loading$:Observable<any>;
  @Input('heading') containerHeading: string = '';
  @Input('defaultButton') containerDefaultButton: string = '';
  @Input('secondaryButton') containerSecondaryButton: string = '';
  isDefaultSelected: boolean = true;
}
