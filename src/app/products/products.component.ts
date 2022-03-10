import { Component, OnInit } from '@angular/core';
import {  PRODUCTS } from './product.object';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // product: Product = {
  //   id: 1,
  //   name: 'Nike',
  //   price: 2000,
  //   imageUrl: '../assets/img.png',
  //   description: "you can read more"
  //   }
  title="Product Page";
  showDetail=false;
    productList = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }
  onViewDetail( id: number ){
    console.log( `Hi Angular ${id}`);
    this.showDetail=!this.showDetail;

  }

}
