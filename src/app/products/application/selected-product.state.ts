import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class SelectedProductState {
  private _product$: BehaviorSubject<Product | null>;

  constructor() { 
    this._product$ = new BehaviorSubject<Product | null>(null);
  }

  setProduct(product: Product | null) {
    this._product$.next(product);
  }

  get product$(): Observable<Product | null> {
    return this._product$.asObservable();
  }
}
