import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PageSingleCardViewModel } from '../../../feature/home/model/cardModel';

@Component({
  selector: 'app-multi-card',
  templateUrl: './multi-card.component.html',
  styleUrl: './multi-card.component.scss'
})
export class MultiCardComponent {
  @Input('content') containerContent$:Observable<PageSingleCardViewModel[]>;
  @Input() loading$:Observable<any>;

}
