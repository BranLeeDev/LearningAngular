import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'fundamentals';
  imgParent = '';
  newValueInput = '';
  products: Product[] = [];

  showImg = true;

  toggleImg() {
    this.showImg = !this.showImg;
  }

  onLoaded(img: string) {
    console.log('Log padre', img);
  }

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
