import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../domain/product';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

  @Input()
  products$: Observable<Product[]> | null;
  

  constructor(private productsComponent: ProductsComponent) {
    this.products$ = null;
   }

  ngOnInit(): void {
  }

  edit(product: Product): void {
    this.productsComponent.edit(product);
  }

  delete(product: Product): void {
    this.productsComponent.delete(product);
  }
}
