import { Component, OnInit } from '@angular/core';
import {  PRODUCTS } from './product.object';
import {Router} from '@angular/router'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title="Product Page";
  showDetail=false;
    productList = PRODUCTS;

  ngOnInit(): void {
  }

  constructor(private route:Router){}

  onViewDetail( id: number ){
 
    this.route.navigateByUrl('products/edit/'+id);

  }
  addNewProduct(){
    this.route.navigateByUrl('products/add');
  }
  delate(id:number){
    this.productList=this.productList.filter(product=>product.id!==id);
  }

}
