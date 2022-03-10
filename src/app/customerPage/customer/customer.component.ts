import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  title="Customer Management Page";
  customers=[
    {id:1,firstName:"John", lastName:"Maickl",address:"AASTU",phone:" 092 323 2323", email:"john@123.com"},
    {id:2,firstName:"Mitku", lastName:"Fuche",address:"AAU",phone:" 092 323 2323", email:"mitku@123.com"},
    {id:3,firstName:"Abdi", lastName:"Dube",address:"Kaliti",phone:" 092 323 2323", email:"abdi@123.com"},
    {id:4,firstName:"Abebeb", lastName:"Kebede",address:"Adama",phone:" 092 323 2323", email:"abie@123.com"},
    {id:5,firstName:"Alemu", lastName:"Fetene",address:"Debrebrehan",phone:" 092 323 2323", email:"mirt@123.com"},
    {id:6,firstName:"Fala", lastName:"Leul",address:"Mekele", phone:" 092 323 2323",email:"fela@123.com"},
    {id:7,firstName:"John", lastName:"Maickl",address:"Bahrdar",phone:" 092 323 2323", email:"zedo@123.com"},
    {id:8,firstName:"John", lastName:"Maickl",address:"Hawassa",phone:" 092 323 2323", email:"chuchu@123.com"},
    {id:9,firstName:"John", lastName:"Maickl",address:"Gonder",phone:" 092 323 2323", email:"zm@123.com"},
    {id:10,firstName:"John", lastName:"Maickl",address:"Kotebe",phone:" 092 323 2323", email:"awo@123.com"},
    {id:11,firstName:"John", lastName:"Maickl",address:"AASTU",phone:" 092 323 2323", email:"tutu@123.com"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addNewCustomer(newCustomer: string){
    let customer={
     id:100, firstName:newCustomer, lastName:"Maickl",address:"AASTU",phone:" 092 323 2323", email:"tutu@123.com"
    }
    this.customers.push(customer);
  }
  delate(id:number){
    this.customers=this.customers.filter(tmr=>tmr.id!==id);
  }

}
