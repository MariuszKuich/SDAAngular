import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  @Input()
  product: Product | null = null;

  @Output()
  canceled: EventEmitter<Product> = new EventEmitter();

  @Output()
  updated: EventEmitter<Product> = new EventEmitter();

  form: FormGroup ;

  constructor(private router: Router) { 
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      currency: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      image: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {
    this.form.patchValue({
      name: this.product?.name,
      price: this.product?.price,
      currency: this.product?.currency,
      description: this.product?.description,
      image: this.product?.image
    });
  }

  ngOnDestroy(): void {
    console.log("Komponent zostal zniszczony");
  }

  cancelEdit(): void {
    const productData = this.form?.value;
    this.canceled.emit(productData);
    this.router.navigate(["/products"]);
  }

  update(): void {
    const productData = this.form?.value;
    this.updated.emit(productData);
  }
}
