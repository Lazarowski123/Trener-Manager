import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPanelComponent } from './customer-panel/customer-panel.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerTrainingDatesComponent } from './customer-training-dates/customer-training-dates.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSidebarComponent } from './customer-sidebar/customer-sidebar.component';
import { FormsModule } from '@angular/forms';
import { CustomersResolver } from '../core/customers-resolver.service';

const rutes: Routes = [
  {
    path: '',
    component: CustomerPanelComponent,
    children: [
      {
        path: 'info',
        component: CustomerInfoComponent,
      },
      {
        path: 'dates',
        component: CustomerTrainingDatesComponent,
        resolve: { customers: CustomersResolver },
      },
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    CustomerPanelComponent,
    CustomerInfoComponent,
    CustomerTrainingDatesComponent,
    CustomerSidebarComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(rutes)],
  exports: [CustomerPanelComponent],
})
export class CustomerModule {}
