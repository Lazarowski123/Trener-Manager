import { Component, OnInit } from '@angular/core';
import { EventType } from '@angular/router';
import { CustomerService } from 'src/app/core/customer.service';
import { CustomerDetails } from 'src/app/customer/models';

@Component({
  selector: 'mgr-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
})
export class CustomersListComponent implements OnInit {
  customers: CustomerDetails[] = [];
  customer: CustomerDetails = {} as CustomerDetails;
  done = false;

  names: string[] = [];

  select: boolean = false;
  selectName: string = 'wybierz klienta';

  constructor(private customerService: CustomerService) {}
  ngOnInit(): void {
    this.refresh();
  }
  deleteCustomer() {
    const check = confirm('czy chcesz dodać nowego klienta ?');
    this.done = false;
    if (check) {
      this.customerService.deleteCustomer(this.customer).subscribe();
      this.refresh();
    }
  }
  refresh() {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
      this.customer = this.customers[0];
      this.names = [];
      customers.forEach((customer) => {
        const name = customer.name;
        this.names.push(name);
      });
      this.selectName = this.names[0];
      this.done = true;
    });
  }
  changeSelect() {
    this.select = !this.select;
  }
  selectOption(name: string) {
    this.selectName = name;
    const findCustomer = this.customers.find(
      (customer) => customer.name === name
    );
    this.customer = findCustomer as CustomerDetails;
    this.select = false;
  }
}
