import { Component, OnInit } from '@angular/core';

import { Product, Products } from './interfaces/shop.interface';
import { ShopService } from './services/shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(public shopService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.shopService.getProducts().subscribe({
      next: ({ products }: Products) => {
        if (products) {
          products = this.shopService.orderByNameProductAddIndex(products);

          this.products = products;
          console.log(this.products);
        }
      },
      error(err) {
        console.log(err);
      },
    });
  }

  createOrder() {
    this.shopService.createOrderInLocaleStore(this.shopService.shoppingToCart);
  }
}
