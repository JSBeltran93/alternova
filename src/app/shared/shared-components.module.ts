import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TableProductToCartComponent } from './components/table-product-to-cart/table-product-to-cart.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardPromotionComponent } from './components/card-promotion/card-promotion.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ProductCardComponent,
    TableProductToCartComponent,
    CarouselComponent,
    CardPromotionComponent,
    FooterComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    NavbarComponent,
    ProductCardComponent,
    TableProductToCartComponent,
    CarouselComponent,
    CardPromotionComponent,
    FooterComponent,
  ],
})
export class SharedComponentsModule {}
