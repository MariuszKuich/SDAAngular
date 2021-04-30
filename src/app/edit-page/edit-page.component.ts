import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { SelectedProductState } from '../selected-product.state';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  product$: Observable<Product | null>;

  constructor(private selectedProductState: SelectedProductState) { 
    this.product$ = this.selectedProductState.product$;
  }

  ngOnInit(): void {

  }

  onEditCanceled(): void {
      this.selectedProductState.setProduct(null);
  }

}
