import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fundamentals';
  name = 'Brandon';
  age = 18;
  img =
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';
  btnDisabled = true;
  person = {
    firstName: 'Brandon',
    lastName: 'Agüero',
    age: 19,
    country: 'Peru',
  };

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.firstName = element.value;
  }

  names: string[] = ['Brandon', 'Julian', 'Carlos', 'Kevin'];
  newName = '';

  addNameToArray() {
    this.names.push(this.newName);
    this.newName = '';
  }

  removeLastElement() {
    this.names.pop();
  }

  removeForIndex(index: number) {
    this.names.splice(index, 1);
  }

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: '../assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: '../assets/images/bike.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: '../assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: '../assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: '../assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: '../assets/images/glasses.jpg',
    },
  ];
}
