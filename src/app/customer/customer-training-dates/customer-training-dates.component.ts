import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/core/customer.service';
import { CustomerDetails } from '../models';

@Component({
  selector: 'cus-customer-training-dates',
  templateUrl: './customer-training-dates.component.html',
  styleUrls: ['./customer-training-dates.component.scss'],
})
export class CustomerTrainingDatesComponent implements OnInit {
  customer: CustomerDetails = {} as CustomerDetails;

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.customer = data['customers'][0];
    });

    // this.customerService.getCustomers().subscribe((response) => {
    //   this.customer = response[0];
    // });
  }
}
