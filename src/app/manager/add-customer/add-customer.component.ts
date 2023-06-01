import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/core/customer.service';

@Component({
  selector: 'mgr-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  name: string = '';
  quantity!: number;
  type: string = '';
  options: string = '';
  initial!: number;
  current!: number;
  target!: number;

  select: boolean = false;
  selectName: string = 'wybierz opcję';
  selectShow: boolean = false;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {}

  add(form: NgForm) {
    if (this.selectName === 'wybierz opcję') {
      this.selectShow = true;
    } else {
      this.selectShow = false;
      const check = confirm('Czy chcesz dodać nowego klienta?');
      if (check) {
        this.customerService
          .createCustomer({
            name: this.name,
            quantity: this.quantity,
            type: this.type,
            options: this.options,
            weight: {
              initial: this.initial,
              current: this.current,
              target: this.target,
            },
            trainingList: [],
          })
          .subscribe();
        form.resetForm();
        this.selectName = 'wybierz opcję';
      }
    }
  }

  changeSelect() {
    this.select = !this.select;
  }
  selectOption(option:string) {
    this.selectName = option;
    this.type = option;
    this.select = false;
  }
}
