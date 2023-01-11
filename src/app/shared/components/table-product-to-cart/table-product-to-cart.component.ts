import { Component, Input } from '@angular/core';
import { Item } from 'src/app/modules/home/interfaces/shop.interface';

@Component({
  selector: 'app-table-product-to-cart',
  templateUrl: './table-product-to-cart.component.html',
  styleUrls: ['./table-product-to-cart.component.scss'],
})
export class TableProductToCartComponent {
  @Input() items: Item[] = [];
}
