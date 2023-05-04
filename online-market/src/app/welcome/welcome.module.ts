import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { WelcomeComponent } from './welcome.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { LoginModule } from '../login/login.module';
import { NewUserModule } from '../new-user/new-user.module';

@NgModule({
  declarations: [WelcomeComponent],
  
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    LoginModule
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }