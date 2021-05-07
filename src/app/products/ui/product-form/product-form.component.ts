import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input()
  product: Product | null = null;

  @Output()
  canceled: EventEmitter<Product> = new EventEmitter();

  @Output()
  updated: EventEmitter<Product> = new EventEmitter();

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  cancelEdit(product: Product): void {
    this.canceled.emit(product);
    this.router.navigate(["/products"]);
  }

  update(product: Product): void {
    this.updated.emit(product);
  }
}
