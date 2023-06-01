import { Component, Input, OnInit } from '@angular/core';
import { CustomerDetails } from 'src/app/customer/models';

@Component({
  selector: 'mgr-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customer: CustomerDetails = {} as CustomerDetails;

  constructor() {}

  ngOnInit(): void {}
}
