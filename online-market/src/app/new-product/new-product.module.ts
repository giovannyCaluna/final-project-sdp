import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {NewProductRoutingModule} from '../new-product/new-product-routing.module'
import { NewProductComponent } from './new-product.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [NewProductComponent],
  imports: [
    CommonModule,
    NewProductRoutingModule,
    FormsModule,
    MatTableModule,
    MatListModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatCardModule

  ],
  exports: [NewProductComponent]
})
export class NewProductModule { }