import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';


@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.css']
})
export class CustomerListPageComponent implements OnInit {


  customers: any = [];

  constructor(private customerSvc: CustomerService
    ) { }

  ngOnInit() {
    // call service to load the list
    this.customerSvc.getAll()
      .subscribe(data => {
        this.customers = data;
      });
  }
}
