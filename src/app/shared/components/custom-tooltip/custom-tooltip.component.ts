import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl,DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrl: './custom-tooltip.component.scss'
})

export class CustomTooltipComponent implements OnInit{
  @Input() title: string;
  @Input() videoUrl: string;
  safeUrl:SafeResourceUrl
  constructor(private sanitizer:DomSanitizer){}
  ngOnInit() {
    if (this.videoUrl) {
      console.log(this.videoUrl)
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.videoUrl}`);
    }
  }
}
