import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input()
  productList !: Product[];
  @Output()
  onProductSelected !: EventEmitter<Product>;

  constructor(){
    this.onProductSelected = new EventEmitter();
  }
}
