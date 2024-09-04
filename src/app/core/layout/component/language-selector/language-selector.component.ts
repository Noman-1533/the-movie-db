import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  closeCLicked: boolean = false;
  languages = [
    { viewValue: 'en-US', value: 'EN' },
    { viewValue: 'bn-BD', value: 'BN' },
    { viewValue: 'in-IN', value: 'IN' },
  ];

  languageSelector($event:any) {
    $event.stopPropagation();
    $event.preventDefault();
  }
}
