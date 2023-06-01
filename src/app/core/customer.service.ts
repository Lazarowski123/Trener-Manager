import { Injectable } from '@angular/core';
import { CustomerDetails } from '../customer/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'https://api-trener.onrender.com/customers';

  constructor(private httpClient: HttpClient) {}

  getCustomers() {
    return this.httpClient.get<CustomerDetails[]>(this.apiUrl);
  }

  createCustomer(CustomerDetails: CustomerDetails) {
    return this.httpClient.post(this.apiUrl, CustomerDetails);
  }

  deleteCustomer(CustomerDetails: CustomerDetails) {
    return this.httpClient.delete(`${this.apiUrl}/${CustomerDetails.id}`);
  }
}
