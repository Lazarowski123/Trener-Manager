import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mgr-manager-sidebar',
  templateUrl: './manager-sidebar.component.html',
  styleUrls: ['./manager-sidebar.component.scss']
})
export class ManagerSidebarComponent implements OnInit {
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
