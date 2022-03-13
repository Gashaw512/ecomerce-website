import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from '../customer.object';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  title="Customer Management Page";

  customerList=Customers;

  constructor(private route:Router){};

  ngOnInit(): void {
  }

  addNewCustomer(){
    console.log("Navigate to customer add form")
    this.route.navigateByUrl('customer/add');
  }
  update( id: number ){
 
    console.log('customer/edit/'+id)
    this.route.navigateByUrl('customer/edit/'+id);

  }

  delate(id:number){
    this.customerList=this.customerList.filter(tmr=>tmr.id!==id);
  }

}
