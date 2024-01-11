import { Component, Input } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrl: './product-row.component.css'
})
export class ProductRowComponent {
  @Input()
  product !: Product;
}
