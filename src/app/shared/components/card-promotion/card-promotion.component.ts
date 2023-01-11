import { Component } from '@angular/core';
import { CardPromotion } from 'src/app/modules/home/interfaces/shop.interface';

@Component({
  selector: 'app-card-promotion',
  templateUrl: './card-promotion.component.html',
  styleUrls: ['./card-promotion.component.scss'],
})
export class CardPromotionComponent {
  promotions: CardPromotion[] = [];
  constructor() {
    this.promotions = [
      {
        img: './assets/img/promotion4.jpg',
        title: 'Promotions',
        description:
          'Tenemos las mejores promociones para ti, puedes chatear con nosotros djaasgdlagsd asdgajg sdka skh',
      },
      {
        img: './assets/img/promotion2.jpg',
        title: 'Popular',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      },
      {
        img: './assets/img/promotion3.jpg',
        title: '24 hours',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      },
      {
        img: './assets/img/promotion1.jpg',
        title: 'Chat ',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
      },
    ];
  }
}
