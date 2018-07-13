import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './orders/order/order.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { WordsComponent } from './words/words/words.component';

const routes: Routes = [
  { path: '', redirectTo: 'order', pathMatch: 'full' },
  { path: 'order', component: OrderComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'words', component: WordsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
