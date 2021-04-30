import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from './data/mock_products';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAll(): Observable<Product[]> {
    return of(PRODUCTS);
  }
}
