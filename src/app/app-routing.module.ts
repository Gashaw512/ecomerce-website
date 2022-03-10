import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customerPage/customer/customer.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"product", component: ProductsComponent},
  // {path:"about", component: AboutComponent},
  {path:"customer", component: CustomerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
