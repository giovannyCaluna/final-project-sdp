import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewUserComponent  } from './new-user.component';

const routes: Routes = [
  {
    path: 'register',
    pathMatch: 'full',
    component: NewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewUserRoutingModule { }