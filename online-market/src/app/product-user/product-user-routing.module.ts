import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductUserComponent } from './product-user.component';

const routes: Routes = [
  {
    path: 'productsUser',
    pathMatch: 'full',
    component: ProductUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductUserRoutingModule { }
