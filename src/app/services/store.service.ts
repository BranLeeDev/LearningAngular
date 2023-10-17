import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private shoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  addProduct(product: Product) {
    this.shoppingCart.push(product);
    this.myCart.next(this.shoppingCart);
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  getTotal() {
    return this.shoppingCart.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
  }
}
