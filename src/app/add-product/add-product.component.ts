import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { PRODUCTS, Product } from '../products/product.object';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  id: number;
   constructor( private router: Router) {
     this.id=0;
    }
  productList=PRODUCTS;
  createdProduct = new Product();

  ngOnInit(): void {
    console.log(this.productList);
  }
  imgUrl='../../assets/images/jordan-3.jpg';
  addNewProduct(product: any){
    this.id=this.productList.length;
    console.log(product)
    console.log(product.name, product.price);
    let p={ id: this.id,
      name: product.name,
      imageUrl: product.url,
      price: product.price,
      description: product.description,

    }

this.productList.push(p);
this.router.navigateByUrl('product');
  }
  // log(pro: any){
  //   console.log(pro)
  // }
  // onselectFile(e: any){
  //   if(e.target.files){
  //     var reader=new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload=(event:any)=>{
  //     this.imgUrl=event.target.result;
  //     }
  //   }
  //       }

}
