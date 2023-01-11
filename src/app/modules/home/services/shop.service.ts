import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import {
  Item,
  Product,
  Products,
  ShoppingToCart,
} from '../interfaces/shop.interface';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  newItem: Item = {
    product: {
      name: '',
      stock: 0,
      unit_price: 0,
      index: 0,
    },
    quantity: 0,
    total_price: 0,
    index: 0,
  };
  products: Product[] = [];
  shoppingToCart: ShoppingToCart = {
    items: [],
    totalPriceOrder: 0,
  };
  totalOrderPrice: number = 0;
  constructor(private httpClient: HttpClient) {}

  /**
   * @returns listado de productos de la tienda
   */
  getProducts() {
    const url = './assets/shop.json';
    return this.httpClient
      .get<Products>(url)
      .pipe(catchError((err) => throwError(() => err)));
  }

  createOrderInLocaleStore(shopping: ShoppingToCart) {
    localStorage.setItem('shopping_cart', JSON.stringify(shopping));

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(shopping)
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'shop.json';

    link.click();
  }

  getShoppingLocaleStore() {
    return localStorage.getItem('shopping_cart');
  }
  removeOrderShoppingLocaleStore() {
    localStorage.removeItem('shopping_cart');
  }

  createShopInLocaleStore(shop: ShoppingToCart) {
    localStorage.setItem('shop', JSON.stringify(shop));
  }

  getShopLocaleStore() {
    return localStorage.getItem('shopping_cart');
  }
  removeShoppingLocaleStore() {
    localStorage.removeItem('shopping_cart');
  }

  /**
   * @param products
   * @returns array de productos ordenanod por el nombre
   */
  orderByNameProductAddIndex(products: Product[]) {
    products = products.sort((a: Product, b: Product) =>
      a.name.toLowerCase().replace(/\s+/g, ' ').trim() >
      b.name.toLowerCase().replace(/\s+/g, ' ').trim()
        ? 1
        : -1
    );
    for (const [index, product] of products.entries()) {
      product.index = index;
    }
    return products;
  }
  /**
   *
   * @param products
   * @returns array de productos ordenanod por el nombre
   */
  orderByNameProductCartAddIndex(items?: Item[]) {
    if (items) {
      items = items.sort((a: Item, b: Item) =>
        a.product.name.toLowerCase().replace(/\s+/g, ' ').trim() >
        b.product.name.toLowerCase().replace(/\s+/g, ' ').trim()
          ? 1
          : -1
      );

      return items;
    } else {
      return [];
    }
  }
}
