import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListComponent, CustomerComponent, CustomersComponent],
  exports: [CustomersComponent]
})
export class CustomersModule {}
