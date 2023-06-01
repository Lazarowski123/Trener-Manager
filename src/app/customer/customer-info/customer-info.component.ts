import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/customer.service';
import { CustomerDetails } from '../models';

@Component({
  selector: 'cus-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent implements OnInit {
  customers: CustomerDetails[] = [];
  customer: CustomerDetails = {} as CustomerDetails;
  done = false;
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response;
      this.customer = this.customers[0];
      this.done = true;
    });
  }
}
