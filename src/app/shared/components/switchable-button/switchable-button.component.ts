import { Component, Input } from '@angular/core';
import { SharedFacadeService } from '../../services/shared.facade.service';

@Component({
  selector: 'app-switchable-button',
  templateUrl: './switchable-button.component.html',
  styleUrl: './switchable-button.component.scss'
})
export class SwitchableButtonComponent {

  @Input('type')containerType:string;
  @Input('defaultButton') containerDefaultButton: string = '';
  @Input('secondaryButton') containerSecondaryButton: string = '';
  @Input('pageName')buttonCallFromPage:string='home';
  isDefaultSelected: boolean = true;

  constructor(private facade:SharedFacadeService){}
  toggleContainerButton() {
    this.isDefaultSelected = !this.isDefaultSelected;
    this.facade.switchButton(this.buttonCallFromPage, this.containerType,this.containerDefaultButton,this.containerSecondaryButton,this.isDefaultSelected);
  }
}
