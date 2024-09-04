import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-ratting',
  templateUrl: './ratting.component.html',
  styleUrls: ['./ratting.component.scss'],
})
export class RattingComponent {
  @Input('ratting') value: string = 'N/A';
  @Input('mode') mode: 'determinate' | 'indeterminate' = 'determinate';
  @Input('stroke')spinnerStrokeWidth:number=4
  @Input('bg-color') backgroundColor: string = 'rgb(50, 45, 45)';
  @Input() spinnerDiameter: number = 40;  
  color: ThemePalette = 'warn';
}
