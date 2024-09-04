import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-overlay',
  templateUrl: './background-overlay.component.html',
  styleUrls: ['./background-overlay.component.scss']
})
export class BackgroundOverlayComponent implements OnInit {
  images = [
    { src: '', alt: 'Background Image', overlayColor: 'rgba(0, 0, 0, .5)' },
    // Add more images as needed
  ];
  @Input('src') imageSource:string='';

  ngOnInit(): void {
    this.images[0].src=this.imageSource;
    this.images.forEach(image => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = image.src;
      img.onload = () => {
        const color = this.getPredominantColor(img);
        image.overlayColor = this.getOverlayColor(color);
      };
    });
  }

  private getPredominantColor(img: HTMLImageElement): [number, number, number] {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0, img.width, img.height);
    const data = context.getImageData(0, 0, img.width, img.height).data;

    let r = 0, g = 0, b = 0, count = 0;

    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }

    r = Math.floor(r / count);
    g = Math.floor(g / count);
    b = Math.floor(b / count);

    return [r, g, b];
  }

  private getOverlayColor([r, g, b]: [number, number, number]): string {
    return `rgba(${255 - r}, ${255 - g}, ${255 - b}, .7)`;
    // return `rgba(${255 - r}, ${255 - g}, ${255 - b}, .7)`;
    // return `rgba(0, 0, 0, .5)`;
  }
}
