import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCustomerComponent } from './customerPage/add-customer/add-customer.component';
import { CustomerComponent } from './customerPage/customer/customer.component';
import { EditCustomerComponent } from './customerPage/edit-customer/edit-customer.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"product", component: ProductsComponent},
  // {path:"about", component: AboutComponent},
  {path:"customer", component: CustomerComponent},
  {path:'products/edit/:?id', component:EditProductComponent},
  {path:'products/add', component:AddProductComponent},
  {path:'customer/add', component:AddCustomerComponent},
  {path:'customer/edit/:?id', component:EditCustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
