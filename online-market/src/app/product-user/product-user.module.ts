import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ProductUserComponent } from './product-user.component'
import {ProductUserRoutingModule} from './product-user-routing.module'
import {MatListModule} from '@angular/material/list';
import { MatPseudoCheckbox } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';





@NgModule({
  declarations: [ProductUserComponent],
  imports: [
    CommonModule,
    ProductUserRoutingModule,
    FormsModule,
    MatTableModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [ProductUserComponent]
})
export class ProductUserModule { }