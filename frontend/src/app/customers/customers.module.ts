import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListComponent, CustomerComponent],
  exports: [ListComponent, CustomerComponent]
})
export class CustomersModule {}
