import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './ui/products/products.component';
import { ProductFormComponent } from './ui/product-form/product-form.component';
import { EditPageComponent } from './ui/edit-page/edit-page.component';
import { ProductsService } from './infrastructure/products.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductGridComponent } from './ui/product-grid/product-grid.component';
import { ProductTableComponent } from './ui/product-table/product-table.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductFormComponent,
    EditPageComponent,
    ProductGridComponent,
    ProductTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ProductsRoutingModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
