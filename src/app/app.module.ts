import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {  NavbarComponent} from './productPage/navbar/navbar.component'
import { FooterComponent } from './productPage/footer/footer.component';
import { CustomerComponent } from './customerPage/customer/customer.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCustomerComponent } from './customerPage/add-customer/add-customer.component';
import { EditCustomerComponent } from './customerPage/edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    FooterComponent,
    CustomerComponent,
    EditProductComponent,
    AddProductComponent,
    AddCustomerComponent,
    EditCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
