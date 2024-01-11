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
        'Black Running Shoes',
        '',
        ['Men','Shoes','Runnig Shoes'],
        45.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '',
        ['Women','Apparel','Jacket & Vests'],
        55.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '',
        ['Men','Accessories','Hats'],
        38.39
      ),
  ]}
  productWasSelected(product : Product): void{
    console.log('Product Clicked: ',product)
  }
}
