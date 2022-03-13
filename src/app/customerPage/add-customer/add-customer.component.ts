import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, Customers } from '../customer.object';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  id: number;
  constructor(private router: Router) {
    this.id = 0;
  }
  customerList = Customers;
  createdCustomer = new Customer();

  ngOnInit(): void {}
  imgUrl = '../../assets/images/jordan-3.jpg';
  addNewCustomer(customer: any) {
    let p = {
      id: this.id,
      firstName: customer.firstName,
      lastName: customer.lastName,
      address: customer.address,
      phone:  customer.phone,
      email: customer.email,
      imgURl: customer.url,
    }
    this.customerList.push(p);
    this.router.navigateByUrl('customer');
  }
}
