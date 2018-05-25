import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-customer-detail-page',
  templateUrl: './customer-detail-page.component.html',
  styleUrls: ['./customer-detail-page.component.css']
})
export class CustomerDetailPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private customerSvc: CustomerService) { }
  customers: any = [];
  bgColor: string;
  // color="bnlue";
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.getCustomerDetail(params.id);
    })

    //     let id = this.route.snapshot.paramMap.get('id');
    // this.getCustomerDetail(id);
    this.route.queryParamMap.subscribe(x => {
      if(x.has('color')){
        this.bgColor = x.get('color');
      }else{
        return;
      }
    })

  }

  getCustomerDetail(id) {
    this.customerSvc.getCustomerDetail(id)
      .subscribe(data => {
        this.customers = data;
      });
  }


}
