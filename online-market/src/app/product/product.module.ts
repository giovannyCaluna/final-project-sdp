import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ProductComponent } from './product.component';
import {ProductRoutingModule} from './product-routing.module'
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    MatTableModule,
    MatListModule,

  ],
  exports: [ProductComponent]
})
export class ProductModule { }