import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './login.component';
import {LoginRoutingModule} from './login-routing.module'
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    BrowserModule,
    LoginRoutingModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,

    MatCardModule,
    MatInputModule  ],
  exports: [LoginComponent]
})
export class LoginModule { }