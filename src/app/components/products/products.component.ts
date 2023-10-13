import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input() products!: Product[];

  shoppingCart: Product[] = [];

  total = 0;

  onAddToShoppingCart(product: Product) {
    this.shoppingCart.push(product);
    this.total = this.shoppingCart.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
  }
}
