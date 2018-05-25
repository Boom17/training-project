import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListPageComponent } from './components/customer-list-page/customer-list-page.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDetailPageComponent } from './components/customer-detail-page/customer-detail-page.component';
import { CustomerAddpageComponent } from './components/customer-addpage/customer-addpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerAddReactivePageComponent } from './components/customer-add-reactive-page/customer-add-reactive-page.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CustomerListPageComponent, CustomerDetailPageComponent, CustomerAddpageComponent, CustomerAddReactivePageComponent]
})
export class CustomerModule { }
