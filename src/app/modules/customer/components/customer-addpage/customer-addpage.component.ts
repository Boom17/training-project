import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-addpage',
  templateUrl: './customer-addpage.component.html',
  styleUrls: ['./customer-addpage.component.css']
})
export class CustomerAddpageComponent implements OnInit {
customer = {
  name: '',
  address:{
    line:'',
    postcode:''
  }
}
  constructor() { }

  ngOnInit() {
  }

  submit(isValid:boolean, formValue: any){
    console.log(isValid);
    console.log(formValue);

  }

}
