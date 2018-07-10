import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetComponent } from './sheet/sheet.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SheetComponent, DetailComponent],
  exports: [SheetComponent, DetailComponent]
})
export class OrdersModule {}
