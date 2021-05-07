import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../domain/product';
import { ProductsService } from '../../infrastructure/products.service';
import { SelectedProductState } from '../../application/selected-product.state';
import { concatMap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  product$: Observable<Product | null>;

  constructor(private selectedProductState: SelectedProductState,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductsService
    ) { 
    this.product$ = this.selectedProductState.product$;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get("id");
      if (productId) {
        this.product$ = this.productService.getById(productId);
      }
    });
  }

  onEditCanceled(): void {
    this.selectedProductState.setProduct(null);
    this.router.navigate(["/products"]);
  }

  onUpdated(product: Product): void {
    this.route.paramMap.pipe(
      filter(params => !!params.get("id")),
      map(params => params.get("id")),
      concatMap(id => this.productService.update(id, product))
    ).subscribe(product => this.router.navigate(["/products"]));
    /*this.route.paramMap.subscribe((params) => {
      const productId = params.get("id");
      if (productId) {
        this.productService.update(productId, product).subscribe();
      }
    });*/
    this.selectedProductState.setProduct(null);
  }
}
