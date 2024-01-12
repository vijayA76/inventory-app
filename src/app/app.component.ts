import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products: Product[];
  constructor(){
    this.products = [
      new Product(
        'MYSHOES',
        'Black Casual Shoes',
        'assets/images/product/shoes.jpg',
        ['Men','Shoes','Casual Shoes'],
        45.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        'assets/images/product/jacket.webp',
        ['Women','Apparel','Jacket & Vests'],
        55.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        'assets/images/product/hat.jpeg',
        ['Men','Accessories','Hats'],
        38.39
      ),
  ]}
  productWasSelected(product : Product): void{
    console.log('Product Clicked: ',product)
  }
}
