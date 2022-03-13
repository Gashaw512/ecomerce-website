import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product, PRODUCTS } from '../products/product.object';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  products = PRODUCTS; // List of products
  // selectedProduct: Product;
  selectedProduct = new Product(); // the selected product
  // constructor() { }
  newProduct = new Product();
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      for (let product of this.products) {
        if (product.id == param['?id']) {
          this.selectedProduct = product;
          console.log(this.selectedProduct.id);
          console.log(this.selectedProduct.name);
        } else {
          console.log('No product available');
          console.log(product.id);
        }
      }
    });
  }

  updateProduct() {
    this.selectedProduct.name = this.newProduct.name;
    this.selectedProduct.price = this.newProduct.price;
    this.newProduct = new Product();
    this.router.navigateByUrl('product');
    
  }
}
