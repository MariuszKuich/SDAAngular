import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../domain/product';
import { ProductsService } from '../../infrastructure/products.service';
import { SelectedProductState } from '../../application/selected-product.state';

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
    this.productService.update(product).subscribe();
    this.selectedProductState.setProduct(null);
  }
}
