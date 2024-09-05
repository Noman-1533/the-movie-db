// tooltip.directive.ts
import { Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2 } from '@angular/core';
import { Overlay, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { CustomTooltipComponent } from '../components/custom-tooltip/custom-tooltip.component';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnDestroy {
  private overlayRef: OverlayRef;

  @Input() tooltipTitle: string;
  @Input() tooltipContent: string;

  constructor(private overlay: Overlay, private elementRef: ElementRef,private renderer:Renderer2) {}

  @HostListener('mouseenter')
  show() {
    const positionStrategy: PositionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'end',    // Position the origin point on the right side of the button
          originY: 'center', // Vertically align the origin point to the center of the button
          overlayX: 'start', // Align the left side of the tooltip with the right side of the button
          overlayY: 'center' // Vertically align the tooltip with the center of the button
        },
      ]);
  
    this.overlayRef = this.overlay.create({ positionStrategy });
  
    const tooltipPortal = new ComponentPortal(CustomTooltipComponent);
    const tooltipRef = this.overlayRef.attach(tooltipPortal);
  
    // Pass data to the tooltip component
    tooltipRef.instance.title = this.tooltipTitle;
    tooltipRef.instance.videoUrl = this.tooltipContent;


  // Listen for mouse leave on the tooltip to close it when hovering out
  // this.renderer.listen(tooltipRef.location.nativeElement, 'mouseleave', () => this.hide());

  // Optionally, reduce the opacity of the button when the tooltip is shown
  this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '0.5');
  }
  

  @HostListener('mouseleave')
  hide() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '1');

    }
  }

  ngOnDestroy() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }
}
