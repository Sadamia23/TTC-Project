import { Component } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  images: any[] | undefined;

  responsiveOptions: any[] | undefined;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getImages().then((images) => (this.images = images));
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }
}
