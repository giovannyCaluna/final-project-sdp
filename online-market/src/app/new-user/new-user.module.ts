import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {NewUserRoutingModule} from '../new-user/new-user-routing.module'
import { NewUserComponent } from './new-user.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [NewUserComponent],
  imports: [
    CommonModule,
    NewUserRoutingModule,
    FormsModule,
    MatTableModule,
    MatListModule,  
    MatButtonModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule

  ],
  exports: [NewUserComponent]
})
export class NewUserModule { }