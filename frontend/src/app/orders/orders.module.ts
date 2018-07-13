import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetComponent } from './sheet/sheet.component';
import { DetailComponent } from './detail/detail.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SheetComponent, DetailComponent, OrderComponent],
  exports: [OrderComponent]
})
export class OrdersModule {}
