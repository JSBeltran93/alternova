import { Component, Input } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { Item, Product } from 'src/app/modules/home/interfaces/shop.interface';
import Swal from 'sweetalert2';

import { ShopService } from './../../../modules/home/services/shop.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: Product = {
    name: '',
    unit_price: 0,
    stock: 0,
  };
  quantityProduct: number | undefined;
  addSucess: boolean = false;
  constructor(private shopService: ShopService) {}
  onSubmit(form: NgForm, product: Product): void {
    if (form.valid) {
      this.addSucess = false;
      if (product.stock === 0) {
        Swal.fire('Upss!', 'No products in stock!', 'error');
      }

      if (product.stock > 0) {
        if (this.quantityProduct && this.quantityProduct <= product.stock) {
          this.addOrUpdateToCart(product);
          this.quantityProduct = undefined;
          this.addSucess = true;
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product added successfully',
            showConfirmButton: false,
            timer: 1200,
          });
        } else {
          Swal.fire('Upss!', 'This amount is not available!', 'error');
        }
      }
    }
  }

  /**
   * Agregar el producto en la lista y actualiza los valores
   * @param product
   */
  addOrUpdateToCart(product: Product) {
    const newProductToCard: Item = {
      product: product,
      index: product.index,
      quantity: this.quantityProduct ? this.quantityProduct : 0,
      total_price: this.quantityProduct
        ? this.quantityProduct * product.unit_price
        : 0,
    };

    const isNewItem = this.shopService.shoppingToCart.items.find(
      (item) => item.index === product.index
    );

    console.log(isNewItem);

    if (!isNewItem) {
      this.shopService.shoppingToCart.items.push(newProductToCard);
    } else {
      for (const item of this.shopService.shoppingToCart.items) {
        if (item.index === product.index) {
          item.quantity += newProductToCard.quantity;
          item.total_price += newProductToCard.total_price;
        }
      }
    }

    this.shopService.newItem = newProductToCard;
    this.shopService.totalOrderPrice += newProductToCard.total_price;
    this.shopService.shoppingToCart.totalPriceOrder =
      this.shopService.totalOrderPrice;
    this.shopService.shoppingToCart.items =
      this.shopService.orderByNameProductCartAddIndex(
        this.shopService.shoppingToCart?.items
      );
  }

  updateValuesLocalStore() {
    this.shopService.removeShoppingLocaleStore();
  }

  validateFormControl(formControl: AbstractControl) {
    let invalidMessage: string = '';
    if (formControl && formControl.status === 'INVALID' && formControl.errors) {
      if (formControl.errors['min']) {
        invalidMessage = 'Minimum 1';
      }
    }
    return invalidMessage;
  }
}
