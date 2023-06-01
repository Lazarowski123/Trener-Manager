import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { FormsModule } from '@angular/forms';
import { ManagerPanelComponent } from './manager-panel/manager-panel.component';
import { ManagerSidebarComponent } from './manager-sidebar/manager-sidebar.component';

const rutes: Routes = [
  {
    path: '',
    component: ManagerPanelComponent,
    children: [
      {
        path: 'customer-list',
        component: CustomersListComponent,
      },
      {
        path: 'add-customer',
        component: AddCustomerComponent,
      },
      {
        path: '',
        redirectTo: 'customer-list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    ManagerSidebarComponent,
    ManagerPanelComponent,
    AddCustomerComponent,
    CustomersListComponent,
    CustomerDetailsComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(rutes)],
  exports: [ManagerPanelComponent],
})
export class ManagerModule {}
