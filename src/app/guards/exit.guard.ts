import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerModule } from '../modules/customer/customer.module';
import { CustomerListPageComponent } from '../modules/customer/components/customer-list-page/customer-list-page.component';

@Injectable({
  //providedIn: CustomerModule
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<CustomerListPageComponent> {

  canDeactivate(
    component: CustomerListPageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    //alert("Cannot exist");
    console.log("Exist");
    return confirm("Are you want to delete");
 
  }
}
