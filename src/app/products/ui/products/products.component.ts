import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Product} from '../../domain/product';
import { ProductsService } from '../../infrastructure/products.service';
import { SelectedProductState } from '../../application/selected-product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> | null;
  productsTableIsEnabled: boolean;

  constructor(private productsService: ProductsService, private selectedProductState: SelectedProductState, private router: Router) { 
    this.products$ = null;
    this.productsTableIsEnabled = environment.productsTableIsEnabled;
  }

  ngOnInit(): void {
    this.products$ = this.productsService.getAll();
  }

  edit(product: Product): void {
    this.selectedProductState.setProduct(product);
    this.router.navigate(['/products/' + product.id]);
  }

  delete(product: Product): void {
    this.productsService.delete(product).subscribe(response => {
      console.log("Usunieto produkt");
      this.products$ = this.productsService.getAll();
    });
  }
}
