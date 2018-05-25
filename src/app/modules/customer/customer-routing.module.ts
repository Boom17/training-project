import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CustomerListPageComponent } from './components/customer-list-page/customer-list-page.component';
import { CustomerDetailPageComponent } from './components/customer-detail-page/customer-detail-page.component';
import { ExitGuard } from '../../guards/exit.guard';
import { CustomerAddpageComponent } from './components/customer-addpage/customer-addpage.component';
import { CustomerAddReactivePageComponent } from './components/customer-add-reactive-page/customer-add-reactive-page.component';


const routes: Routes = [
  { path: 'list',   canDeactivate: [ExitGuard], component: CustomerListPageComponent },
  { path: 'add', component: CustomerAddpageComponent},  
  { path: 'add2', component: CustomerAddReactivePageComponent},  

  { path: ':id', component: CustomerDetailPageComponent },
  { path: '', component: CustomerListPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  //providers:[ExitGuard]
})
export class CustomerRoutingModule { }

export const routedComponents = [CustomerListPageComponent, CustomerDetailPageComponent,CustomerAddpageComponent, CustomerAddReactivePageComponent];