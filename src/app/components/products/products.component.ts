import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input() products!: Product[];

  shoppingCart: Product[] = [];

  constructor(private storeService: StoreService) {
    this.shoppingCart = this.storeService.getShoppingCart();
  }

  total = 0;

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
