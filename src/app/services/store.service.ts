import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private shoppingCart: Product[] = [];

  addProduct(product: Product) {
    this.shoppingCart.push(product);
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  getTotal() {
    return this.shoppingCart.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
  }

  constructor() {}
}
