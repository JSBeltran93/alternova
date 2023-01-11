import { Component } from '@angular/core';
import { Carousel } from 'src/app/modules/home/interfaces/shop.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  listCarousel: Carousel[] = [];
  constructor() {
    this.listCarousel = [
      {
        img: './assets/img/shop1.jpg',
        alt: 'alt 1',
      },
      {
        img: './assets/img/shop2.jpg',
        alt: 'alt 1',
      },
      {
        img: './assets/img/shop3.jpg',
        alt: 'alt 3',
      },
    ];
  }
}
