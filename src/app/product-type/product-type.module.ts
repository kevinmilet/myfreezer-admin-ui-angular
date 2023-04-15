import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductTypeRoutingModule } from './product-type-routing.module';
import { ProducttypeIndexComponent } from './components/producttype-index/producttype-index.component';


@NgModule({
  declarations: [
    ProducttypeIndexComponent
  ],
  imports: [
    CommonModule,
    ProductTypeRoutingModule
  ]
})
export class ProductTypeModule { }
