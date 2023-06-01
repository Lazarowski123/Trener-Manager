import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerDetails } from '../customer/models';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersResolver implements Resolve<CustomerDetails[]>{

  constructor(private customerService: CustomerService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): CustomerDetails[] | Observable<CustomerDetails[]> | Promise<CustomerDetails[]> {
    return this.customerService.getCustomers()
  }
}
