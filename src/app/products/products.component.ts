import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Product} from '../model/product';
import { ProductsService } from '../products.service';
import { SelectedProductState } from '../selected-product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> | null;

  constructor(private productsService: ProductsService, private selectedProductState: SelectedProductState, private router: Router) { 
    this.products$ = null;
  }

  ngOnInit(): void {
    this.products$ = this.productsService.getAll();
  }

  edit(product: Product): void {
    this.selectedProductState.setProduct(product);
    this.router.navigate(['/products/' + product.id]);
  }
}
