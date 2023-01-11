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
    this.getShoppingCart();
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

  getShoppingCart() {
    // this.shopServce.getShoppingCart().subscribe({
    //   next: (shopping: ShoppingToCart) => {
    //     if (shopping && shopping.items) {
    //       shopping.items = this.shopServce.orderByNameProductCartAddIndex(
    //         shopping.items
    //       );
    //       for (const [index, item] of shopping.items.entries()) {
    //         item.total_price = item.product.unit_price * item.quantity;
    //         item.index = index;
    //         this.totalOrderPrice += item.total_price;
    //       }
    //       console.log(shopping);
    //       this.shoppingToCart.items = shopping.items;
    //       this.shoppingToCart.totalPriceOrder = this.totalOrderPrice;
    //     }
    //   },
    //   error(err) {
    //     console.log(err);
    //   },
    // });
  }
  addItem() {
    console.log(this.shopService.newItem);
    if (this.shopService.newItem) {
      const newItem = this.shopService.newItem;
      // const actualShopping = await JSON.parse(
      //   this.shopServce.getShoppingLocaleStore() || ''
      // );

      // console.log('actualShopping', actualShopping);
      // if (actualShopping && actualShopping.items) {
      //   const isNewItem = actualShopping.items.find(
      //     (item: Item) => item.product.index === newItem.index
      //   );
      //   console.log(isNewItem);

      //   if (!isNewItem) {
      //     console.log('nuevo', newItem);
      //   } else {
      //     this.shoppingToCart.items?.push(newItem);
      //   }
      // }
      // this.shoppingToCart.items?.push(newItem);
      // this.totalOrderPrice += newItem.total_price;
      // this.shoppingToCart.totalPriceOrder = this.totalOrderPrice;
      // this.shoppingToCart.items =
      //   this.shopService.orderByNameProductCartAddIndex(
      //     this.shoppingToCart?.items
      //   );
    }
  }

  createOrder() {
    this.shopService.createOrderInLocaleStore(this.shopService.shoppingToCart);
  }
}
