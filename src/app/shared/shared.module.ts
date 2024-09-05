import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CardComponent } from './components/card/card.component';
import { RattingComponent } from './components/ratting/ratting.component';
import { BackgroundOverlayComponent } from './components/background-overlay/background-overlay.component';
import { ContainerComponent } from './components/container/container.component';
import { SwitchableButtonComponent } from './components/switchable-button/switchable-button.component';
import { MultiCardComponent } from './components/multi-card/multi-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomTooltipComponent } from './components/custom-tooltip/custom-tooltip.component';
import { TooltipDirective } from './directives/tooltip.directive';


@NgModule({
  declarations: [
    CardComponent,
    RattingComponent,
    BackgroundOverlayComponent,
    ContainerComponent,
    SwitchableButtonComponent,
    MultiCardComponent,
    CustomTooltipComponent,

    TooltipDirective,
   
  ],
  imports: [CommonModule, AngularMaterialModule, FontAwesomeModule,
],
  exports: [
    CardComponent,
    RattingComponent,
    BackgroundOverlayComponent,
    ContainerComponent,
    SwitchableButtonComponent,
    MultiCardComponent,
    CustomTooltipComponent,

    TooltipDirective,
    
    AngularMaterialModule, 
    FontAwesomeModule,

  ],
})
export class SharedModule {}
