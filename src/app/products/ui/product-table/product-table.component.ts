import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../domain/product';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  @Input()
  products$: Observable<Product[]> | null;

  constructor(private productsComponent: ProductsComponent) { }

  ngOnInit(): void {
  }

  edit(product: Product): void {
    this.productsComponent.edit(product);
  }

  delete(product: Product): void {
    this.productsComponent.delete(product);
  }
}
