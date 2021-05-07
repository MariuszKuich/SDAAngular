import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PRODUCTS } from '../../data/mock_products';
import { Product } from '../domain/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = `${environment.apiUrl}/product`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  getById(id: string): Observable<Product | null> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }

  update(id: string, updatedProduct: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.apiUrl}/${id}`, updatedProduct);
  }

  delete(deletedProduct: Product): Observable<boolean> {
    return this.httpClient.delete<Product>(`${this.apiUrl}/${deletedProduct.id}`).pipe(
      map((response) => true)
    );
  }
}
