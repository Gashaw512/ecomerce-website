import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, Customers } from '../customer.object';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  
  customers = Customers; // List of products
  // selectedProduct: Product;
  selectedCustomer = new Customer(); // the selected product
  // constructor() { }
  newCustomer = new Customer();
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      for (let customer of this.customers) {
        if (customer.id == param['?id']) {
          this.selectedCustomer = customer;
          // console.log(this.selectedProduct.id);
          // console.log(this.selectedProduct.name);
        } else {
          console.log('No product available');
          console.log(customer.id);
        }
      }
    });
  }

  updateCustomer() {

    this.selectedCustomer.imgURl=this.newCustomer.imgURl;
    this.selectedCustomer.firstName=this.newCustomer.firstName;
    this.selectedCustomer.lastName=this.newCustomer.lastName;
    this.selectedCustomer.address=this.newCustomer.address;
    this.selectedCustomer.email=this.newCustomer.email;
    this.selectedCustomer.phone=this.newCustomer.phone;

    
    
    this.router.navigateByUrl('customer');
    
  }
}
