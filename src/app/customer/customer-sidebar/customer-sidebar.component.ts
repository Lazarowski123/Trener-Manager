import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cus-customer-sidebar',
  templateUrl: './customer-sidebar.component.html',
  styleUrls: ['./customer-sidebar.component.scss'],
})
export class CustomerSidebarComponent implements OnInit {
  menu: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  changeMenu() {
    this.menu = !this.menu;
  }
  hiden() {
    this.menu = false;
  }
}
