export interface Products {
  products?: Product[];
}

export interface Product {
  index?: number;
  name: string;
  img?: string;
  unit_price: number;
  stock: number;
}

export interface ShoppingToCart {
  items: Item[];
  totalPriceOrder?: number;
}

export interface Item {
  index?: number;
  product: Product;
  quantity: number;
  total_price: number;
}

export interface CardPromotion {
  img: string;
  title: string;
  description: string;
}
export interface Carousel {
  img: string;
  alt: string;
}
